
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getAuth } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { getCartTotal } from '../../../selectors';
import { CartProducts } from '../../components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CurrencyFormat from 'react-currency-format';
import axios from "axios";

import './Payment.scss';

export const Payment = () => {
  const [user, setUser] = useState<any>();
  const { cart } = useSelector(( store: any ) => store.cart );
  const navigate = useNavigate();

  // const stripe: any = useStripe();
  // const elements: any = useElements();

  // const [succeeded, setSucceeded] = useState( false );
  // const [processing, setProcessing] = useState("");
  // const [error, setError] = useState( null );
  // const [disabled, setDisabled] = useState<any>();
  // const [clientSecret, setClientSecret] = useState( true );

  const auth = getAuth().currentUser || null;

  setUser( auth );
  
  useEffect(() => {
    // get user from firebase auth
   
    // generate the special stripe secret which allows us to charge a customer
    // const getClientSecret = async () => {
    //   const response = await axios({
    //     method: "post",
    //     // Stripe expects the total in a currencies subunits
    //     url: `./payments/create?total=${getCartTotal(cart) * 100}`,
    //   });
    //   setClientSecret(response.data.clientSecret);
    // };

    // getClientSecret();
  }, []);

  const handleSubmit = async ( e: any ) => {
    // do all the fancy stripe stuff...
    e.preventDefault();
    // setProcessing( 'true' );

    // const promise = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements.getElement( CardElement ),
    //     },
    //   })
    //   .then(( e: any ) => {
    //     // paymentIntent = payment confirmation
    //     setSucceeded(true);
    //     setError(null);
    //     setProcessing( 'false' );
    //     navigate("/orders");
    //   });
  };

  const handleChange = ( e: any ) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    // setDisabled( e.empty );
    // setError( e.error ? e.error.message : "" );
  };

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>Pago ({<Link to="/checkout">{ cart?.length } items</Link>})</h1>
        {/* Payment section - delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{ user?.email || 'Jose' }</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - Review Items */}
        <div className='payment__section'>
          <h3>Review items and delivery</h3>
        </div>
        <div className='payment__items'>
          {/*  */}
          { cart.map(( item: any ) => (
            <CartProducts
              id={item.codigo}
              nombre={item.nombre}
              image={item.image__front}
              precio={item.precio}
            />
          ))}
        </div>
        {/* Payment section - Payment method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            {/* Stripe magic will go */}
            {/* <form onSubmit={ handleSubmit }>
              <CardElement onChange={ () => handleChange } />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={( value: any ) => (
                    <>
                      <h3>Order Total: { value || '0' }</h3>
                    </>
                  )}
                  decimalScale={ 2 }
                  value={ getCartTotal(cart) }
                  //Part of the homework
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  className='pay'
                >
                </button>
              </div>
              {/* Errors */}
              {/* {error && <div>{ error }</div>} */}
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;