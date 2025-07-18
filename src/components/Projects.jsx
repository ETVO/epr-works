import React, { useState, useRef, useEffect } from "react";

export default function Projects({ projects, startExpanded, golden }) {

  return (
    <ul className="Projects mt-8 flex flex-col gap-12">
      {projects.map((project, index) => <Project project={project} startExpanded={startExpanded} golden={golden} key={index} />)}
    </ul>
  )
}

function Project({ project, startExpanded, golden }) {
  const contentRef = useRef(null);

  const [expand, setExpand] = useState(startExpanded);
  const [contentHeight, setcontentHeight] = useState(null);


  useEffect(() => {
    if (expand && contentRef.current) {
      setcontentHeight(contentRef.current.scrollHeight + 'px');
    }
    else {
      setcontentHeight(0);
    }
  }, [expand]);

  return (
    <li className="Project">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <img src={project.imgs[0]}
          className='border-10 border-gray-200 portfolio-image'
          style={golden ? {borderColor: 'var(--color-gold'} : {}} />
      </a>
      <h2 className="text-xl font-bold mt-6">
        <a className="hover-underline hover:text-gold" href={project.url} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </h2>

      <div className="text-xs font-light mt-2">
        <div
          className="cursor-pointer transition-colors inline-block hover-underline text-gray-500 hover:text-gray-800"
          onClick={() =>
            setExpand(!expand)
          }
        >
          {expand ? 'Hide Description' : 'Read More'}
        </div>
      </div>

      <div
        ref={contentRef}
        style={{
          height: contentHeight,
          opacity: expand ? 1 : 0,
          overflow: 'hidden',
          transition: 'height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)'
        }}
        className="transition-description"
      >
        <div className="text-sm font-light mt-2 leading-normal">
          <p className="mb-1">{project.desc}</p>
          <p className="font-normal">Lauched in {project.year}.</p>
        </div>
        {project.tech && project.tech.length > 0 && (
          <ul className="text-sm mt-4">
            {project.tech.map((tech, idx) => (
              <li key={idx} className="text-sm font-light inline-block mr-2 mb-2 px-1.5 py-0.5 text-darkgold border-lightgold border-1 rounded">
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}