import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getCartTotal } from "../../../selectors";

import CurrencyFormat from "react-currency-format";

import './Subtotal.scss';

export const Subtotal = () => {

  const navigate = useNavigate();
  const { cart } = useSelector(( store: any ) => store.cart);

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={( value: any ) => (
          <>
            <p>
              ({cart.length} elementos): <strong>{ value }</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" />
              Buona Fit Regalo 🧡
            </small>
          </>
        )}
        decimalScale={2}
        value={ getCartTotal( cart ) } // Calculate total cart
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {/* <ButtonPrincipal onClick={(e) => navigate("/payment")}>
        Vamos a pagar
      </ButtonPrincipal> */}
       <button onClick={(e) => navigate("/payment")}>
        Vamos a pagar
      </button>
    </div>
  )
}
