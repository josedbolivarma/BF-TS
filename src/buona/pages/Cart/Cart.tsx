import { getCartTotal } from "../../../selectors"
import { formatoCOP } from "../../../utils"
import { CartProducts, Subtotal } from "../../components"
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { BsCartFill } from 'react-icons/bs';

// Styles
import './Cart.scss';

export const Cart = () => {

    const [user, setUser] = useState<any | null>( null );
    const { cart } = useSelector(( store: any ) => store.cart);
  
    useEffect(() => {
      const auth = getAuth().currentUser;
      setUser( auth );
    }, []);

  return (
    <div className='cart'>
    <div className='cart__container'>
      <div className='cart__containerTitle'>
        <h2 className='cart__title'><i>CARRITO DE COMPRA</i></h2>
        <BsCartFill />
        SHOP
      </div>
      <div className='cart__container'>
        <div className='cart__containerLabels'>
         
        </div>

        { cart.map(( item: any, index: number ) => (
          <CartProducts
            key={index}
            id={item.codigo}
            nombre={item.nombre}
            image={item.image__front}
            precio={item.precio}
          />
        ))}
      </div>
      <div className='cart__containerTitle'>
        <h3 className="cart__titleGray">Subtotal: { formatoCOP.format(getCartTotal( cart ) ) } </h3>
        <p className="cart__subtitleGray">
          Los códigos de descuento, los costes de envío y los impuestos se
          añaden durante el pago.
        </p>
      </div>
      
      <div className='form__orderFlex'>
        <div className='cart__containerForm'>
          <h3 className="cart__titleDarkGray">
            Indicaciones para el vendedor
          </h3>
          <form className='cart__form'>
            <textarea
              className='cart__formTextarea'
              name="support"
            ></textarea>
            <div className='cart__formContainerCheckbox'>
              <input type="checkbox" name="supportCheck" />
              <label>Estoy de acuerdo con los términos y condiciones.</label>
            </div>
            <button className="btn-cart">Finalizar Pedido</button>
          </form>
        </div>

        <div className='cart__order'>
          <Subtotal />
        </div>

      </div>
    </div>
  </div>
  )
}

export default Cart;