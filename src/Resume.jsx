import Experience from "./components/Experience";
import './styles/Resume.scss';

const workExperience = [
  {
    title: "Full Stack Developer",
    company: {
      name: "Roboyo Portugal",
      url: "https://www.wemake.pt/"
    },
    desc: "Part of a team in Roboyo developing a management system for Ascendi, a major player in Portugal’s road infrastructure sector.",
    type: "Full-Time",
    location: "Porto, Portugal",
    modality: "Remote",
    periodStart: "Jul 2024",
    periodEnd: "Mar 2025",
    keySkills: 2,
    skills: [
      "Laravel",
      "Aurelia.js",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "Linux",
      "Teamwork",
      "CI/CD",
      "Scrum",
    ]
  },
  {
    title: "Web & Graphic Designer",
    company: {
      name: "Terramay",
      url: "https://www.terramay.com/"
    },
    desc: "Created Squarespace website, provided ongoing technical support for a Shopify store, and designed various assets.",
    type: "Part-Time",
    location: "Portugal",
    modality: "Remote",
    periodStart: "Feb 2024",
    periodEnd: "Jan 2025",
    keySkills: 3,
    skills: [
      "Squarespace",
      "Shopify",
      "Graphic Design",
      "Liquid",
      "Canva",
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Various Clients",
    type: "Freelancer",
    location: "Brazil and Portugal",
    modality: "Remote",
    desc: "Created many institutional websites, particularly in the Real-Estate sector, developing custom WordPress themes and plugins. Built a full-featured sales app based on React.js and PHP, handling front-end and back-end, including REST API development and external integrations.",
    periods: [
      {
        periodStart: "Mar 2023",
        periodEnd: "Nov 2023",
      },
      {
        periodStart: "Feb 2020",
        periodEnd: "Jul 2021",
      },
    ],
    keySkills: 4,
    skills: [
      "WordPress",
      "React.js",
      "PHP",
      "ACF (WP)",
      "JavaScript",
      "CodeIgniter",
      "JSX",
      "APIs",
      "MySQL",
      "PostgreSQL",
      "Bootstrap",
      "SCSS",
      "Web Design",
      "Adobe XD",
      "Software Architecture",
      "Project Management",
    ]
  },
  {
    title: "Web Developer",
    company: {
      name: "Portugal Homes",
      url: "https://www.portugalhomes.com/"
    },
    desc: "Worked on integrating the WordPress API for better content management.",
    type: "Contract",
    location: "Lisbon, Portugal",
    modality: "On-Site",
    periodStart: "Feb 2023",
    periodEnd: "Mar 2023",
    skills: [
      "Laravel",
      "WordPress API",
      "PHP",
      "JavaScript",
    ]
  },

  {
    title: "Web & Graphic Designer",
    company: {
      name: "Lux Digital",
      url: "https://luxdigital.pt/"
    },
    desc: "Marketing for the Healthcare and Wellbeing sectors. Responsible for website creation, branding projects, and graphic design.",
    type: "Full-Time",
    location: "Portugal",
    modality: "Remote",
    periodStart: "Feb 2022",
    periodEnd: "Jan 2023",
    keySkills: 4,
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Elementor",
      "ACF",
      "WordPress",
      "PHP",
      "JavaScript",
      "MySQL",
      "Graphic Design",
      "Digital Marketing",
      "SEO",
      "Branding",
      "Canva",
    ]
  },

  {
    title: "PHP Developer",
    company: {
      name: "Celfocus",
      url: "https://celfocus.com/"
    },
    desc: "Support and development for an intranet system used by Vodafone.",
    type: "Contract",
    location: "Lisbon, Portugal",
    modality: "Remote",
    periodStart: "Jul 2021",
    periodEnd: "Sep 2021",
    skills: [
      "PHP",
      "SOAP",
      "JavaScript",
      "HTML",
      "CSS",
      "Docker",
      "SQL Server",
    ]
  },
  {
    title: "Robotics Instructor",
    company: {
      name: "Industrial Technical School, São Paulo State University",
      url: "https://cti.feb.unesp.br/"
    },
    desc: "Taught introductory classes on Arduino and IoT to students and teachers from the community. Planned lessons, conducted classes, and built practical projects.",
    type: "Internship",
    location: "Bauru, SP, Brazil",
    modality: "On-Site",
    periodStart: "Mar 2019",
    periodEnd: "Dec 2019",
    keySkills: 3,
    skills: [
      "Arduino",
      "Internet of Things (IoT)",
      "Teaching",
      "Presentation Skills",
      "Lesson Planning",
      "Public Speaking",
    ]
  },
  {
    title: "Full Stack Developer",
    company: {
      name: "PhD Project @ University of Barcelona",
      url: "https://voleibol-competencias.com/",
    },
    type: "Freelancer",
    location: "Barcelona, Spain",
    modality: "Remote",
    desc: "Developed a web app using PHP and JavaScript to support data collection and analysis for a PhD research project conducted at the University of Barcelona.",
    periodStart: "Feb 2018",
    periodEnd: "Dec 2018",
    skills: [
      "PHP",
      "JavaScript",
      "p5.js",
      "PostgreSQL",
      "Data Analysis",
      "Software Architecture",
    ]
  },
];

var education = [
  {
    title: "Information Technology",
    company: {
      name: "Industrial Technical School, São Paulo State University",
      url: "https://voleibol-competencias.com/",
    },
    type: "Technical Degree",
    location: "Bauru, SP, Brazil",
    desc: <>
      <p className="mb-1">CTI <i>(Colégio Técnico Industrial)</i> is one of the top technical schools in São Paulo. It offers a rigorous curriculum that combines secondary education with technical studies. Students can choose from three industrial fields: IT, Electronics, or Mechanics. Known for its academic excellence, the school ranked third nationwide in Brazil.</p>
      <ul className="list-disc list-inside flex flex-col gap-0.5 font-semibold">
        <li>
          In-depth programming courses in C++, C#, Java, PHP, and JavaScript.
        </li>
        <li>
          Logic, operating systems, and computing fundamentals.
        </li>
        <li>
          Web development and graphic design with practical applications.
        </li>
        <li>
          Foundations in project management and business administration.
        </li>
        <li>
          Database modeling, optimization, and scalability principles.
        </li>
        <li>
          Capstone project developed collaboratively in a 9-person team.
        </li>
        <li>
          Over 400 hours of hands-on professional internship experience.
        </li>
      </ul>
    </>,
    periodStart: "2017",
    periodEnd: "2019",
  },

  {
    title: "Secondary School",
    company: {
      name: "Industrial Technical School, São Paulo State University",
      url: "https://voleibol-competencias.com/",
    },
    type: "Secondary School",
    location: "Bauru, SP, Brazil",
    periodStart: "2017",
    periodEnd: "2019",
  },
];

var additional = [
  {
    title: "Professional Acting Course",
    company: {
      name: "ACT School",
      url: "https://act-escoladeactores.com/",
    },
    type: "Professional Course",
    location: "Lisbon, Portugal",
    desc: "Vocal training and articulation, working in relation to the space, creating and enriching characters' backstories, physical training, improvisation.",
    periodStart: "Oct 2024",
    periodEnd: "May 2025",
  },
  {
    title: "Theater Acting School",
    company: {
      name: "EVOÉ",
      url: "https://evoe.pt/",
    },
    type: "Professional Course",
    location: "Lisbon, Portugal",
    desc: "Actor as a creator, stage techniques, vocal training, singing, poetics of play, improvisation, body and movement. Exchanges in Spain and Italy.",
    periodStart: "Oct 2021",
    periodEnd: "Jul 2022",
  },
  {
    title: "Science program \"Neuro-robotics as a tool to understand the brain\"",
    company: {
      name: "BIYSC",
      url: "https://biysc.org/",
    },
    location: "Barcelona, Spain",
    desc: "BIYSC is a two-week international residential science program for young people. In this program, we delve into the principles of Neuroscience, philosophy of mind, Robotics, and the opportunities that arise from intersecting these fields practically and conceptually.",
    periodStart: "July 2019"
  },
  {
    title: "Neurosciences courses",
    company: {
      name: "Brainbee - Hospital Albert Einstein",
      url: "https://www.einstein.br/brainbee",
    },
    location: "São Paulo, Brazil",
    desc: "Preparatory course to the annual São Paulo Neuroscience Olympics (Brainbee), promoting the study of Neurosciences and facilitating the exchange of experiences between students and scientists.",
    periodStart: "2018, 2019"
  },
];

const languages = [
  {
    title: "English",
    company: "Fluent"
  },
  {
    title: "Spanish",
    company: "Fluent"
  },
  {
    title: "Portuguese",
    company: "Native"
  },
];



export default function Résumé() {

  return (
    <>
      <h1 className='text-xl font-bold'>Résumé</h1>

      <p>Welcome to my résumé page. Here you’ll find a detailed overview of my professional experience, divided into two sections: Full-Time Roles and Freelance Projects.</p>

      <div className="résumé-section mt-10">
        <h2 className="text-2xl font-bold text-gold">Experience</h2>

        <Experience experience={workExperience} />
      </div>
      <div className="résumé-section mt-10">
        <h2 className="text-2xl font-bold text-gold">Education</h2>

        <Experience experience={education} hideDuration={true} />
      </div>
      <div className="résumé-section mt-10">
        <h2 className="text-2xl font-bold text-gold">Additional Qualification</h2>

        <Experience experience={additional} />
      </div>
      <div className="résumé-section mt-10">
        <h2 className="text-2xl font-bold text-gold">Languages</h2>

        <Experience experience={languages} />
        {/* {languages.map((lang, idx) => (
          <div className="flex flex-col items-baseline mt-4 ms-4" key={idx}>
            <h3 className="title text-md font-bold leading-snug">{lang.name}</h3>
            <p className="text-sm font-light">{lang.level}</p>
          </div>
        ))} */}
      </div>
    </>
  )
}