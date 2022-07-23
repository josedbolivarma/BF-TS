import { Link } from "react-router-dom"

import './Header.scss';
import { Divide as Hamburger } from 'hamburger-react'

import { Nav } from '../';
import { useState } from "react";

// Icons
import { BsFillPersonFill } from 'react-icons/bs';

const iconStyles = { fontSize: '30px' };

export const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isOpen, setOpen] = useState<boolean>(false)
  
  const handleMenu = () => {
    setShowMenu(!showMenu);
    setOpen( !isOpen );
  }

  return (
    <div className="header__root">
      <div className="header">
        <div className="header__container">
          <h3 className="header__title">
            BUONA FIT
          </h3>
          <div
            className={
              showMenu ? 'header__menuFalse' : 'header__menu'
            }
          >
            <div className="header__links">
              <Link className="header__link" to="/">
                INICIO
              </Link>
              <Link className="header__link" to="/products">
                PRODUCTOS
              </Link>
              <Link className="header__link" to="/detalle">
                DETALLE
              </Link>
            </div>
          </div>
          <div className="header__socialIcons">
            {/* /login */}
            <Link className="header__link" to="/login">
              <div className="header__option">
              {/* onClick={ handleLogout }  */}
                <span className="header__optionLineOne">
                  Hola,{" "}
                  Jose
                  {/* {!user
                    ? "Guest"
                    : !user.displayName
                    ? user.email
                    : user.displayName} */}
                </span>

                {/* { user ? "Cerrar Sesión" : "Inicio de Sesión"} */}
                Inicio de Sesion
                <BsFillPersonFill style={ iconStyles }/>
                {/* <PersonIcon /> */}
              </div>
            </Link>
            <Link className="header__link" to="/cart">
              {/* <ShoppingCartIcon /> */}
              {/* <span>{ cart.length }</span> */}
            </Link>
            {/* <MenuIcon */}


            <div className="menuIcon">
            <Hamburger toggled={isOpen} toggle={ handleMenu } />
            </div>
            {/* /> */}
          </div>
        </div>
      </div>
      <Nav />
      {/* { n.length === 7 ? <Navbar /> : <Nav />} */}
    </div>
  )
}
