import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import './mainLayout.css'

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout