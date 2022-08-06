import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectedModal } from '../../../redux/action/actionModal';
import { listAsync } from '../../../redux/action/actionProducts';
import { formatoCOP } from '../../../utils';
import { FaShoppingCart } from 'react-icons/fa';

// Styles
import './Gallery.scss';
import { addSyncToCart } from '../../../redux/action/actionShoppingCart';

export const Gallery = ({ categoria = "Elite" }: any ) => {

    const dispatch = useDispatch();

    const { modal } = useSelector((store: any ) => store.modal);
    const { products } = useSelector((store: any ) => store.products);
  
    const filtrado = products.filter(( item: any ) => item.categoria === categoria );
  
    const enviarDatosModal = ( codigo: string ) => {
      dispatch(selectedModal(codigo));
    };
  
    const addToCart = ( productCart: any ) => {
      dispatch( addSyncToCart( productCart ) );
    }

    useEffect(() => {
      dispatch<any>( listAsync() );
    }, [ modal ]);

    
  return (
    <div className='root__gallery'>
      { filtrado.map(( card: any ) => (
        <div key={card.codigo} className='gallery__box'>
          <Link to="/detalle">
            <img
              onClick={() => enviarDatosModal(card)}
              className='gallery__image'
              src={card.image__front}
              alt="F"
            />
          </Link>
          <span className='gallery__markPrice'>
            { formatoCOP.format( card.precio ) }
          </span>
          <div className='gallery__content'>
            <p className='link-green'>{card.nombre}</p>

            <button 
            type="button"
            className='btn-cart-add' 
            onClick={ () => addToCart( card ) }
            >
              Agregar <FaShoppingCart />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
