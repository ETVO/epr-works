import { useState, useRef, useEffect } from 'react'

import { techStack } from '../../data'

const TechItem = ({ item }) => {
  const techItem = techStack[item]

  let style = { backgroundColor: techItem.bg }

  if (techItem.fg) style.color = techItem.fg

  return (
    <span
      className="inline-block mr-2 mb-2 px-1.5 py-0.5 text-white rounded-full"
      style={style}
    >
      {techItem.name}
    </span>
  )
}

function PortfolioItem({ project }) {
  const contentRef = useRef(null)

  const [expand, setExpand] = useState(false)
  const [contentHeight, setcontentHeight] = useState(null)

  useEffect(() => {
    if (expand && contentRef.current) {
      setcontentHeight(contentRef.current.scrollHeight + 'px')
    } else {
      setcontentHeight(0)
    }
  }, [expand])
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-item"
    >
      <img src={project.imgs[0]} className="portfolio-image" />

      <div>
        <h2 className="text-xl font-bold">{project.title}</h2>

        <p className="text-sm text-muted font-light mt-2 leading-normal">
          {project.services.join(' • ')}
        </p>

        <i className="bi bi-arrow-up-right"></i>
      </div>
    </a>
  )
}

export default PortfolioItem
