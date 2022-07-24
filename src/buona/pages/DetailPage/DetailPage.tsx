import { Gallery } from "../../components";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './DetailPage.scss';
import { DetailsContainer } from "../../containers";

export const DetailPage = () => {

  const { modal } = useSelector(( store: any ) => store.modal);
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    window.scrollTo(0, 0);
    modal && setProduct(modal);
  }, [modal]);

  return (
    <div className='detailPage'>
    <DetailsContainer product={product} />
    <div className='detailPage__container'>
      <div className='detailPage__boxTitle'>
        <h2 className='title-gray'>
          <i>DETALLES</i>
        </h2>
        <h3>{product?.detalles}</h3>
      </div>
      <div
        className='detailPage__boxTitle'
        style={{
          borderTop: "3px solid #5C5C5C",
          borderBottom: "3px solid #5C5C5C",
        }}
      >
        <h2 className='title-gray'>
          <i>INGREDIENTES</i>
        </h2>
        <h3>{product?.ingredientes}</h3>
      </div>
      <div className='detailPage__boxTitle'>
        <h2 className='title-gray'>
          <i>INSTRUCCIONES DE USO</i>
        </h2>
        <h3>{product?.instrucciones}</h3>
      </div>
      <div className='detailPage__boxWarning'>
        <p className="red-link">Warning</p>
        <p>{product?.warnings}</p>
      </div>
      <div className='galleryContainer__title'>
        <h2 className="title-gray">OTROS PRODUCTOS</h2>
        <h2 className="title-dark">¡OBTEN RESULTADOS!</h2>
          <div className='galleryContainer__gallery'>
              <div className="animate__animated animate__fadeInLeftBig">
                <Gallery categoria="Definición" />
              </div>
          </div>
        
      </div>

      {/* Comments */}
      {/* <CommentsContainer product={product} /> */}
      {/* Comments */}
    </div>
  </div>
  )
}

export default DetailPage;