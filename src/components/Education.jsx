import { useState } from "react";

function getCompanyLinkOrName(company, showArrow = false) {
  return (
    <span>
      {showArrow ? '⤷ ' : ''}
      {company.url
        ? <a href={company.url} target="_blank" className="hover-underline hover:text-gold">{company.name} <span className="text-xs">↗</span></a>
        : (company.name ?? company)}
    </span>
  );
}

export default function Education({ experience, hideDuration }) {

  return (
    <ul className="mt-4 ms-4 flex flex-col gap-4 experience-list">
      {
        experience.map((job, index) => {
          const periodsElement = <Periods job={job} hideDuration={hideDuration} />;

          return (
            <li key={index} className="mb-4 experience-li">
              <div className="flex flex-row gap-4 gap-y-0 items-start">
                <div className="sm:w-2/3">
                  {/* Job Title */}
                  <h3 className="title text-lg font-bold leading-snug">{job.title}</h3>
                  {/* Company, Location and Type */}
                  <p className="text-sm font-light">
                    {getCompanyLinkOrName(job.company)}
                  </p>
                  {job.companyList && (
                    <ul>
                      {job.companyList.map((company, idx) => (
                        <li key={idx} className="text-sm font-light text-gray-500">
                          {getCompanyLinkOrName(company, true)}
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Periods and Duration column */}
                  <div className="block sm:hidden">
                    {periodsElement}
                  </div>
                  <div className="text-xs text-gray-500 mt-3">
                    <span className="text-darkergold">{job.location}</span>
                    <span className="font-light">
                      {job.type && <span> &middot; {job.type}</span>}
                      {job.modality && <span> &middot; {job.modality}</span>}
                    </span>
                  </div>
                </div>

                {/* Periods and Duration column */}
                <div className="hidden sm:block">
                  {periodsElement}
                </div>
              </div>

              {/* Additional information */}
              <div className="mt-2">
                <AdditionalInfo job={job} />
              </div>
            </li>
          )
        })
      }
    </ul>
  );
}

function Periods({ job, hideDuration }) {

  function getDurationText(job) {
    // Helper to parse "MMM YYYY" or "Month YYYY"
    function parseDate(str) {
      if (!str) return null;
      const months = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
      };
      const parts = str.split(' ');
      if (parts.length === 2 && months[parts[0]]) {
        return new Date(Number(parts[1]), months[parts[0]]);
      }
      // fallback: try Date.parse
      return new Date(str);
    }

    function diffInMonths(start, end) {
      const s = parseDate(start);
      const e = parseDate(end);
      if (!s || !e) return 0;
      return (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1;
    }

    let totalMonths = 0;
    if (job.periods) {
      totalMonths = job.periods.reduce((sum, p) => sum + diffInMonths(p.periodStart, p.periodEnd), 0);
    } else {
      totalMonths = diffInMonths(job.periodStart, job.periodEnd);
    }
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let text = '';
    if (years > 0) text += `${years} yr${years > 1 ? 's' : ''}`;
    if (months > 0) {
      if (text) text += ' ';
      text += `${months} mo${months > 1 ? 's' : ''}`;
    }
    if (!text) text = '<1 mo';
    return text;
  }

  return (
    <div className="Periods">
      <p className="text-xs font-medium mt-2 sm:mt-0 sm:flex sm:flex-col-reverse sm:text-sm">
        {job.periods ? (
          job.periods.map((period, idx) => (
            <span key={idx} className="sm:block">
              {period.periodStart} to {period.periodEnd}
              {idx < job.periods.length - 1 && ', '}
            </span>
          ))
        ) : (
          <span>
            {job.periodStart} to {job.periodEnd}
          </span>
        )}
        {!hideDuration &&
          <>
            <span className="inline sm:hidden"> &middot; </span>
            <span className="text-xs text-gray-500 sm:block sm:mb-1" style={{ textWrap: 'nowrap' }}>
              <span>{getDurationText(job)}</span>
            </span>
          </>
        }
      </p>
    </div>)
}

function AdditionalInfo({ job }) {
  const [expand, setExpand] = useState(false);

  const skillCount = job.keySkills ?? 2;

  return (
    <div>
      { // Show description if expanded
        expand && job.desc &&
        <p className="desc text-sm text-gray-800 mt-2 ">{job.desc}</p>
      }
      <div className="skills-wrapper text-xs font-light mt-2">
        {!expand && job.skills ? <>
          <Skills skills={job.skills.slice(0, skillCount)} />
          {(job.skills.length > skillCount) &&
            <span className="text-xs text-gray-400 hover-underline cursor-pointer hover:text-gold" onClick={() => setExpand(!expand)}> +{job.skills.length - skillCount}</span>}
        </>
          : <Skills skills={job.skills} />}
      </div>
      {/* Expand button */}
      <span className="inline-block text-xs font-light text-gray-500 hover-underline cursor-pointer hover:text-gold mt-4" onClick={() => setExpand(!expand)}>
        {expand ? 'Hide' : 'Read more'}
      </span>
    </div>
  );
}

function Skills({ skills }) {
  return skills && (
    <div className="Skills inline">
      <p className="text-sm inline font-medium text-darkgold">{skills.join(', ')}</p>
      {/* {skills.map((skill, i) => {
        var className = `skill text-xs font-light inline-block mr-2 mb-2 px-1.5 py-0.5 rounded`;
        return (
          <li key={i}
            className={className} >{skill}</li>
        )
      })} */}
    </div>
  );
}