import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatoCOP } from '../../../utils';

import './DetailsContainer.scss';

import ReactImageMagnify from 'react-image-magnify';

const initialState = {
    nombre: "Producto De Ejemplo",
    codigo: "normal",
    precio: 20000,
    image__front: "https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg",
    image__lateral:
      "https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg",
    image__back: "https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg",
};

export const DetailsContainer = ({ product = initialState }) => {

    
  const { modal } = useSelector((store: any) => store.modal);

  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!modal.image__front) {
      setImage("https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg");
    } else {
      setImage(modal.image__front);
    }
  }, [modal]);

  const addToCart = ( productCart: any ) => {
    // dispatch(addSyncToCart(productCart));
  };

  
  return (
    <div className='detailsContainer'>
      <div className='detailsContainer__options'>
        <img
          onMouseEnter={() => setImage(product.image__front)}
          className={
            product.image__front
              ? 'detailsContainer__optionImage'
              : 'displayNone'
          }
          src={
            product.image__front ? product.image__front : product.image__front
          }
          alt="front"
        />
        <img
          onMouseEnter={() => setImage(product.image__lateral)}
          className={
            product.image__lateral
              ? 'detailsContainer__optionImage'
              : 'displayNone'
          }
          src={
            product.image__lateral
              ? product.image__lateral
              : product.image__front
          }
          alt="lateral"
        />
        <img
          onMouseEnter={() => setImage(product.image__back)}
          className={
            product.image__back
              ? 'detailsContainer__optionImage'
              : 'displayNone'
          }
          src={product.image__back ? product.image__back : product.image__front}
          alt="back"
        />
      </div>
      {/* Card Detail */}
      <div className='detailsContainer__detail2'>
        <div className='detailsContainer__detail'>
          <ReactImageMagnify
            className='detailsContainer__detailImage'
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: image,
              },
              largeImage: {
                src: image,
                width: 800,
                height: 1200,
              },
            }}
          />
        </div>
      </div>
      {/* Card Detail */}

      {/* Card Info */}

      <div className='card__info'>
        <div>
          <h3 className='card__title'>
            {modal.nombre}
          </h3>
        </div>
        <h3
          className='flexText'
        >
          <p>
            <b>Envio Gratis.</b>
          </p>
          <h4 className='clickInfoDetails'>Detalles</h4>
        </h3>
        <div className='detailsContainer__boxInfo'>
          <h3 className='detailsContainer__price'>Precio</h3>
          <h3 className='link-green'>
            { formatoCOP.format(modal.precio) }
          </h3>
        </div>
        {/*  */}
        <div className='detailsContainer__containerInfoFlex'>
          <div className='detailsContainer__boxInfoFlex'>
            <h3 className='detailsContainer__infoLabel'>
              Categoría
            </h3>
            <h3 className='detailsContainer__infoText'>
              { modal.categoria }
            </h3>
          </div>
          <div className='detailsContainer__boxInfoFlex'>
            <h3 className='detailsContainer__infoLabel'>
              Sabor
            </h3>
            <h3 className='detailsContainer__infoText'>
              { modal.sabor }
            </h3>
          </div>
          <div className='detailsContainer__boxInfoFlex'>
            <h3 className='detailsContainer__infoLabel'>
              Contenido
            </h3>
            <h3 className='detailsContainer__infoText'>
              { modal.gramos }
            </h3>
          </div>
        </div>
        {/*  */}
        <div className='detailsContainer__payment'>
          {/* <ButtonPrincipal onClick={() => addToCart(modal)}>
            Agregar al Carrito <ShoppingCart />
          </ButtonPrincipal> */}
          <button 
          className='btn-pay-yellow'
          onClick={() => addToCart(modal)}>
            Agregar al Carrito
          </button>
          {/* <ShoppingCart className={classes.button__rounded} /> */}
        </div>
      </div>
      {/* Card Info */}
    </div>
  )
}
