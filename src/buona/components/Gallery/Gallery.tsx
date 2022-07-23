import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listAsync } from '../../../redux/action/actionProducts';
import './Gallery.scss';

export const Gallery = ({ categoria = "Elite" }: any ) => {

    const dispatch = useDispatch();

    // const { modal } = useSelector((store: any ) => store.modal);
    const { products } = useSelector((store: any ) => store.products);
  
    const filtrado = products.filter(( item: any ) => item.categoria === categoria );
  
    const enviarDatosModal = ( codigo: string ) => {
    //   dispatch(selectedModal(codigo));
    };
  
    useEffect(() => {
      dispatch<any>( listAsync() );
    }, []);

    
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
            {/* { formatoCOP.format(card.precio) } */}
            $80.000
          </span>
          <div className='gallery__content'>
            <Link className='link-green' to="/detalle">{card.nombre}</Link>

            <button className='btn-gallery' type="button">
              Agregar al Carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
