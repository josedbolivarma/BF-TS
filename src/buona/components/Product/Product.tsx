import { formatoCOP } from '../../../utils'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectedModal } from '../../../redux/action/actionModal';
import { addSyncToCart } from '../../../redux/action/actionShoppingCart';
import { FaShoppingCart } from 'react-icons/fa';

// Styles 
import './Product.scss';

export const Product = ({ product }: any ) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
  
    const enviarDatosModal = ( item: any ) => {
      dispatch(selectedModal(item));
      navigate("/detalle");
    };
  
    const addToCart = ( productCart: any ) => {
      dispatch( addSyncToCart( productCart ) );
    };

  return (
    <div className='product'>
      <img
        className='product__image'
        src={product.image__front}
        onClick={() => enviarDatosModal(product)}
        alt=""
      />
      <div className='product__content'>
        <div>
          <p className='product__categoria'>
            { product.categoria }
          </p>
         
          <p className='product__text'>
            { product.nombre }
          </p>
        </div>
        <button 
        className='btn-cart-add' 
        onClick={() => addToCart( product )}>
          Agregar <FaShoppingCart />
        </button>
        <p className='product__markPrice'>
          {formatoCOP.format( product.precio )}
        </p>
      </div>
    </div>
  )
}
