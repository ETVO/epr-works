import '../styles/components/experience.scss'

const Experience = () => {
  return (
    <div className="experience">
      <h2 className="section-title">8 years of <span>experience</span></h2>
      <div>
        <div>
          <h3>Freelancer</h3>
          <p>
            Delivered MVP in weeks with external integrations. Delivered 10+
            custom WordPress websites across real estate, healthcare, and other
            industries.
          </p>
          <div className="dates">Feb 2018 – Present</div>
        </div>
        <div>
          <h3>Roboyo Portugal</h3>
          <p>
            Modernized a legacy management system into a high-performance web
            application, reducing page load times from 10–20 seconds to
            near-instant response, serving Ascendi Portugal’s entire engineering
            team.
          </p>
          <div className="dates">Jul 2024 – Mar 2025</div>
        </div>
        <div>
          <h3>Robotics Teacher (Internship)</h3>
          <p>
            Developed and facilitated full courses on Arduino and Internet of
            Things.
          </p>
          <div className="dates">Feb 2019 – Dec 2019</div>
        </div>
      </div>
    </div>
  )
}

export default Experience
