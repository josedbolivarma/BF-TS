import { formatoCOP } from "../../../utils"
import { useDispatch } from 'react-redux';
import { deleteSyncFromCart } from "../../../redux/action/actionShoppingCart";

// Styles
import './CartProducts.scss';

export const CartProducts = ({ id, image, nombre, precio }: any ) => {

    const dispatch = useDispatch();
  
    const removeFromCart = () => {
      dispatch( deleteSyncFromCart( id ) );
    };
    
  return (
    <div className='cartProducts'>
      <img
        className='cartProducts__image'
        src={ image }
        alt="cart Products"
      />

      <div className='cartProducts__info'>

        <p className='cartProducts__title'>{ nombre }</p>
        <div className="cartProducts__flex">
        <p className='cartProducts__price'>
          { formatoCOP.format( precio )}
        </p>
        <button 
        className="btn-cart" 
        onClick={ removeFromCart }>
          <span style={{
            fontSize: '.8rem'
          }}>
            ELIMINAR
          </span>
        </button>
        </div>

      </div>

    </div>
  )
}
