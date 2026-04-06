import { useEffect, useState } from 'react'
import '../styles/components/skills.scss'

const Skills = () => {
  const [index, setIndex] = useState(0)

  const icons = ['flower1', 'bug', 'braces-asterisk', 'briefcase', 'key']

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % icons.length) 
    }, 1500)

    return () => clearTimeout(timer)
  })


  const getIcon = (i) => {
    const iconIndex = (index + i) % icons.length
    return icons[iconIndex]
  }

  const skills = [
    ['PHP', 'JavaScript', 'TypeScript', 'SQL'],
    ['WordPress', 'Laravel', 'React', 'Node.js'],
    ['Figma', 'GitHub', 'Slack'],
  ]

  return (
    <div className="skills">
      {skills.map((group, i) => (
        <div key={i}>
          <i className={`bi bi-${getIcon(i)}`}></i>
          {group.join(', ')}
        </div>
      ))}
    </div>
  )
}

export default Skills