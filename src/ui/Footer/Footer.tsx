import { Link } from "react-router-dom"

import './Footer.scss';

// Icons
import { FaFacebookSquare, FaInstagram, FaTwitter, FaPaypal, FaEuroSign, FaGlobeEurope } from 'react-icons/fa';

const iconStyle = { fontSize: '30px' };

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__socialIcons">
            <a className="footer__iconMedia" href="https://www.facebook.com/">
              <FaFacebookSquare style={ iconStyle } />
            </a>
            <a className="footer__iconMedia" href="https://twitter.com/?lang=es">
              <FaTwitter style={ iconStyle } />
            </a>
            <a className="footer__iconMedia" href="https://www.instagram.com/">
              <FaInstagram style={ iconStyle } />
            </a>
          </div>
          <h2 className="footer__logo">BUONA FIT</h2>
          <div className="footer__socialIcons">
            <a className="footer__iconPayment" href="https://colombia.payu.com/">
              <FaPaypal style={ iconStyle } />
            </a>
            <a className="footer__iconPayment" href="https://www.dolar-colombia.com/">
              <FaEuroSign style={ iconStyle } />
            </a>
            <a className="footer__iconPayment" href="https://www.portafolio.co/internacional/euro-cae-a-su-nivel-mas-bajo-en-cinco-anos-564632">
              <FaGlobeEurope style={ iconStyle } />
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__links">
            <Link className="footer__link" to='/Blog'>
              Nuestro Blog
            </Link>
            <Link className="footer__link" to='/Productos'>
              Productos
            </Link>
            <Link className="footer__link" to='/Estudios'>
              Estudios
            </Link>
            <Link className="footer__link" to='/Trending'>
              Trending Fisics
            </Link>
            <Link className="footer__link" to='/AcercaDe'>
              Acerca de Nosotros
            </Link>
          </div>
          <p className="footer_copywrite">
            Buona Fit Derechos Reservados
          </p>
        </div>
      </div>
    </div>
  )
}
