import { formatoCOP } from "../../../utils"

import './CartProducts.scss';
import { useDispatch } from 'react-redux';
import { deleteSyncFromCart } from "../../../redux/action/actionShoppingCart";

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
        <p className='cartProducts__price'>
          <p>{ formatoCOP.format( precio )}</p>
        </p>
        <div>
        <button onClick={ removeFromCart }>Remove</button>

        </div>
      </div>
    </div>
  )
}
