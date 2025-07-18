import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import Résumé from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import Extras from './Extras.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import './styles/pattern.scss';
import './styles/App.scss';


function PageLayout() {
  return (
    <div className="PageLayout">
      <Header />

      <div className="px-4 sm:px-6">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

function Home() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className='text-xl font-bold'>Estevão Pereira Rolim</h1>
          <sub className='text-base'>Portfolio, Résumé, and Extras</sub>
        </div>
        <img className='profile-photo w-20 h-30' src="./Estevão-Pereira-Rolim.jpg" alt="Photo of Estevão" />

        <p className='text-sm text-gray-500'>
          This website was built with React.js and Vite!<br/>Check out the GitHub repository for this project: <a className='hover-underline text-gold' target='_blank' href="https://github.com/ETVO/epr-works">ETVO/epr-works</a>
        </p>
        <p className='text-sm text-gray-500'>
          <a className='hover-underline text-gold' target='_blank' href="https://docs.google.com/document/d/1WN9uvv4_qSLyZqCBvtQdcyVrsKz4dyxCR_hx7aYRfYY/export?format=pdf" download>Download my CV</a>
        </p>
      </div>
    </>
  )
}

export default function App() {

  return (
    <div className="App flex pt-8 sm:pt-20 pb-10">
      <div className='container max-w-prose mx-auto'>
        <BrowserRouter>
          <Routes>
            <Route element={<PageLayout />} >
              <Route index element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/résumé" element={<Résumé />} />
              <Route path="/extras" element={<Extras />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      <BackToTop />

    </div>
  )
}
