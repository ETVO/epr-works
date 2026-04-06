import { useState } from 'react'

const Footer = () => {
  const [dot, setDot] = useState('.')

  const addDot = () => {
    console.log('........................................'.length)
    if(dot.length >= 60) {
      return setDot('.')
    }
    if (dot.length === 40) {
      return setDot((prev) => prev + ' Wow!')
    }
    if (dot.slice(dot.length - 1) === '!') {
      return setDot((prev) => prev + '!')
    }
    setDot((prev) => prev + '.')
  }
  return (
    <footer>
      <p>
        Developed by{' '}
        <a href="#it-is-me!" onClick={addDot}>
          ETVO
        </a>
        {dot}
      </p>
    </footer>
  )
}

export default Footer
