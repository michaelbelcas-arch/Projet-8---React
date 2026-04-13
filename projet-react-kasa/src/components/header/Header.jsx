import { NavLink } from 'react-router-dom'
import logoRed from '../../assets/logo-red.png'
import './header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          <img src={logoRed} alt="Logo Kasa" className="header__logo-image" />
        </NavLink>

        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header