import Header from '../partials/Header'
import Footer from '../partials/Footer'

function PageLayout({ children }) {
  return (
    <div className="PageLayout position-rela">
      {/* <Header /> */}

      <div className="px-4 sm:px-6">{children}</div>

      <Footer />
    </div>
  )
}

export default PageLayout
