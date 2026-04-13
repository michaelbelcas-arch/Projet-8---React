import footerDesktop from '../../assets/footer-desktop.png'
import footerMobile from '../../assets/footer-mobile.png'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img
          src={footerDesktop}
          alt="Footer Kasa"
          className="footer__image footer__image--desktop"
        />

        <img
          src={footerMobile}
          alt="Footer Kasa"
          className="footer__image footer__image--mobile"
        />
      </div>
    </footer>
  )
}

export default Footer