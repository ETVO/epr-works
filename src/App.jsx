import Footer from './components/partials/Footer'
import Profile from './components/Profile'
import Portfolio from './components/Portfolio/Portfolio'
import BackToTop from './components/BackToTop'
import './styles/pattern.scss'
import './styles/App.scss'

export default function App() {
  return (
    <div className="app-body container mx-auto">
      <div className="main pt-20">
        <div className="sticky max-w-85">
          <Profile />
        </div>
        <div className="content">
          <Portfolio />
        </div>
      </div>
      <Footer />
      <BackToTop />
    </div>
  )
}
