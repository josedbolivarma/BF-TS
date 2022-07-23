import { Link } from 'react-router-dom';

import './Nav.scss';

export const Nav = () => {
  return (
    <div className='nav'>
    <div className='nav__container'>
      <div className='nav__links'>
        <div className='nav__frase'>Tu mejor versión</div>
        <Link className='nav__link' to="/buonaTest">
          BUONA TEST
        </Link>
        <Link className='nav__link' to="/training">
          ENTRENAMIENTOS
        </Link>
      </div>
    </div>
  </div>
  )
}
