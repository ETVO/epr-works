import Profile from './components/Profile'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Numbers from './components/Numbers'
import Presentation from './components/Presentation'
import Experience from './components/Experience'

import './styles/main.scss'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app-body container mx-auto">
      <div className="main">
        <div className="side">
          <Profile />
        </div>
        <div className="content">
          <Presentation />
          <Numbers />
          <Skills />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}
