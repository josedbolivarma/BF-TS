import { Link } from 'react-router-dom';

import './Nav.scss';

export const Nav = () => {
  return (
    <div className='nav'>
    <div className='nav__container'>
      <div className='nav__links'>
        <div className='nav__link'>Tu Mejor Versión</div>
        <Link className='nav__link' to="/test">
          BUONA TEST
        </Link>
        {/* <Link className='nav__link' to="/trainning">
          ENTRENAMIENTOS
        </Link> */}
      </div>
    </div>
  </div>
  )
}
