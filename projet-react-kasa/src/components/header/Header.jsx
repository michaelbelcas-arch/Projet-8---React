import { NavLink } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          {/* TODO: ajouter ici le logo Kasa */}
          <span>Kasa</span>
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
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header