import PortfolioItem from './PortfolioItem'
import '../../styles/components/portfolio.scss'

import { portfolio } from '../../data'

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="section-title">
        Latest <span>Projects</span>
      </h2>

      <ul className="mt-8 flex flex-col gap-10">
        {portfolio.map((project, index) => (
          <PortfolioItem key={index} project={project} />
        ))}
      </ul>
    </div>
  )
}
