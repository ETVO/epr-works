import Projects from './components/Projects';
import './styles/Portfolio.scss';

const featured = [
  {
    url: "https://novaempreendimentos.com.br",
    title: "Nova Empreendimentos",
    year: 2023,
    imgs: ["/portfolio/nova-empre.jpg"],
    desc: "A robust, feature-rich website designed to showcase the portfolio of a leading real estate venture company. With elegant design and a strong focus on user experience, every page was carefully developed to precisely reproduce the original design, provided by a different professional, while ensuring functionality, responsiveness, and performance.",
    services: ["Development of WP Theme & Plugin", "Implementation"],
    tech: ["WordPress", "ACF", "PHP", "JavaScript", "HTML", "SCSS"]
  },
]

const portfolioProjects = [
  {
    url: "https://www.paopizza.com/",
    title: "Pão & Pizza",
    year: 2024,
    imgs: ["/portfolio/paopizza.jpg"],
    desc: "An institutional website for the restaurant and pizzeria affiliated with Quinta Terramay, located in Alentejo, Portugal. Designed to reflect the essence and flavor of their products through a clean and elegant presentation, while maintaining consistency with Terramay’s visual and editorial identity.",
    services: ["Building with Squarespace", "Implementation"],
    tech: ["Squarespace"]
  },
  {
    url: "https://luxdigital.pt",
    title: "Lux Digital",
    year: 2023,
    imgs: ["/portfolio/luxdigital.jpg"],
    desc: "\"Digital marketing, human strategy\" is the motto driving Lux Digital’s work. The website was designed to visually express this fresh, personalized approach. By balancing vibrant colors with clear messaging, the design cuts through the noise and projects confidence with a strong sense of authenticity. Before prototyping and development, I worked on Lux’s branding and visual identity, uncovering the core idea and ensuring it remained consistent across all media. Crafted, conceptualized and developed by Estevão P. Rolim.",
    services: ["Branding", "Prototyping", "Development", "Implementation"],
    tech: ["WordPress", "ACF", "PHP", "JavaScript", "HTML", "SCSS"]
  },
  {
    url: "https://oficmusic.com",
    title: "OFiC Music",
    year: 2023,
    imgs: ["/portfolio/ofic.jpg"],
    desc: "Website developed for the Catarinense Philharmonic Orchestra (OFiC), a non-profit dedicated to enriching Santa Catarina’s cultural scene through symphonic and instrumental music. Built with Elementor, the site focuses on subtle usability, smooth animations, and full responsiveness — aiming for an experience so seamless, the interface disappears, letting the music and mission speak for themselves.",
    services: ["Development of WP plugin", "Building with Elementor", "Implementation"],
    tech: ["WordPress", "Elementor", "PHP", "JavaScript"]
  },
  {
    url: "https://espacodaraluz.com.br",
    title: "Espaço Dar À Luz",
    year: 2022,
    imgs: ["/portfolio/dar-a-luz.jpg"],
    desc: "Espaço Dar À Luz, founded by Brazil’s first recognized doula, supports women through natural, humanized childbirth. The website was reimagined, through a long process of editorial reorganization, as well as visual and functional redevelopment. Now, content is more accessible, and the design inspires confidence in the informations and services offered.",
    services: ["Building with Elementor", "Implementation"],
    tech: ["WordPress", "Elementor", "JavaScript"]
  },
  {
    url: "https://femaiempreendimentos.com.br",
    title: "Femai Empreendimentos",
    year: 2022,
    imgs: ["/portfolio/femai.jpg"],
    desc: "FEMAI is a real estate company focused on residential and commercial developments. Built from a prototype designed by another professional, so precision was a priority, while also ensuring functionality, performance, and responsiveness across devices. Aimed at lead conversion and property showcase.",
    services: ["Development of WP Theme & Plugin", "Implementation"],
    tech: ["WordPress", "ACF", "PHP", "JavaScript", "HTML", "SCSS"]
  },
  {
    url: "https://comelliconstrucoes.com.br",
    title: "Comelli Construções",
    year: 2022,
    imgs: ["/portfolio/comelli.jpg"],
    desc: "Comelli is a construction company focused on residential buildings. Built from a prototype designed by another professional, so precision was a priority, while also ensuring functionality, performance, and responsiveness across devices. Aimed at lead conversion and property showcase.",
    services: ["Development of WP Theme & Plugin", "Implementation"],
    tech: ["WordPress", "ACF", "PHP", "JavaScript", "HTML", "SCSS"]
  },
  {
    url: "https://gprinvestimentos.com.br",
    title: "GPR Investimentos",
    year: 2021,
    imgs: ["/portfolio/gpr.jpg"],
    desc: "GPR Investimentos is a real estate company specializing on modern investment strategies. Built from a prototype designed by another professional, so precision was a priority, while also ensuring functionality, performance, and responsiveness across devices. Aimed at lead conversion and property showcase.",
    services: ["Development of WP Theme & Plugin", "Implementation"],
    tech: ["WordPress", "ACF", "PHP", "JavaScript", "HTML", "SCSS"]
  },
  {
    url: "https://gdiempreendimentos.com",
    title: "GDI Empreendimentos",
    year: 2021,
    imgs: ["/portfolio/gdi.jpg"],
    desc: "GDI Investimentos is a real estate company focused on high-level residential developments. Built from a prototype designed by another professional, so precision was a priority, while also ensuring functionality, performance, and responsiveness across devices. Aimed at lead conversion and property showcase.",
    services: ["Development of WP Theme & Plugin", "Implementation"],
    tech: ["WordPress", "ACF", "PHP", "JavaScript", "HTML", "SCSS"]
  },
  {
    url: "https://cfnegocios.com.br",
    title: "CF Negócios Imobiliários",
    year: 2021,
    imgs: ["/portfolio/cf.jpg"],
    desc: "CF Negócios is a real estate company specializing in time-sharing developments for the tourism sector. Built from a prototype designed by another professional, so precision was a priority, while also ensuring functionality, performance, and responsiveness across devices. Aimed at lead conversion and property showcase.",
    services: ["Development of WP Theme & Plugin", "Implementation"],
    tech: ["WordPress", "ACF", "PHP", "JavaScript", "HTML", "SCSS"]
  },
  {
    url: "https://voleibol-competencias.com",
    title: "Voleibol Competências",
    year: 2018,
    imgs: ["/portfolio/voleibol.jpg"],
    desc: "The first website I built. It was created to support a Doctorate research project in Physical Education in the University of Barcelona. Through a series of pages, a questionnaire collects data from volleyball players, coaches and referees, to analyze the competencies rated most relevant for each area of the sport, and how they self-evaluate in each of them. The data collected is organized in a custom dashboard, offering insights and a custom graphical representation of the results.",
    services: ["Development", "Implementation"],
    tech: ["PHP", "JavaScript", "HTML", "p5.js", "CSS"]
  }
];

export default function Portfolio() {

  return (
    <>
      <h1 className='text-xl font-bold'>Portfolio</h1>

      <p>Welcome to my portfolio. Here you’ll find a selection of projects I’ve developed over the years.</p>

      <div className='flex flex-col gap-12 mt-10'>
        <div>
          <h2 className="text-2xl font-bold text-gold cursor-pointer">Featured Work</h2>
          <Projects projects={featured} startExpanded={true} golden={true} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gold cursor-pointer">More Projects</h2>
          <Projects projects={portfolioProjects} />
        </div>
      </div>

    </>
  )
}

