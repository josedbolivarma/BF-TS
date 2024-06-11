import { Link, useNavigate } from "react-router-dom"

import './Header.scss';
import { Divide as Hamburger } from 'hamburger-react'

import { Nav } from '../';
import { useEffect, useState } from "react";

// Icons
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { User, getAuth } from "firebase/auth";
import { logoutAsync } from "../../redux/action/actionLogin";

const iconStyles = { fontSize: '30px' };

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(true);
  const [isOpen, setOpen] = useState<boolean>(false)
  const [user, setUser] = useState<User|any>({});
  
  const { cart } = useSelector(( store: any ) => store.cart);

  const handleMenu = () => {
    setShowMenu(!showMenu);
    setOpen( !isOpen );
  }

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };

  const selectHandler = () => {
    if (user) {
      handleLogout();
    }
  }

  useEffect(() => {
    const auth = getAuth().currentUser;
    setUser(auth);
    console.log({auth});
    
  }, []);

  return (
    <div className="header__root">
      <div className="header">
        <div className="header__container">
          <Link className="header__title" to='/'>
              BUONA FIT
          </Link>
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
              {/* <Link className="header__link" to="/detalle">
                DETALLE
              </Link> */}
            </div>
          </div>
          <div className="header__socialIcons">
            {/* /login */}
            <p className="header__link">
              <div className="header__option" onClick={selectHandler}>
              {/* onClick={ handleLogout }  */}
                <span className="header__optionLineOne">
                  Hola,{" "}
                  {
                    user?.displayName 
                    ? user?.displayName
                    : user?.email
                  }
                  {/* {!user
                    ? "Guest"
                    : !user.displayName
                    ? user.email
                    : user.displayName} */}
                </span>
                { user ? "Cerrar Sesión" : "Inicio de Sesión"}
                <BsFillPersonFill style={ iconStyles }/>
              </div>
            </p>
            <Link className="header__link" to="/cart">
              <FaShoppingCart style={ iconStyles }/>
              <span>{ cart.length }</span>
            </Link>


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
