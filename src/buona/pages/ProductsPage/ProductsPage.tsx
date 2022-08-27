
import { Product } from '../../components';
import { useEffect, useState } from 'react';
import { listAsync } from '../../../redux/action/actionProducts';
import { useSelector, useDispatch } from 'react-redux';

import './ProductsPage.scss';
import { Loader } from '../../../ui';

export const ProductsPage = () => {
    
  const { products } = useSelector((store: any ) => store.products);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("Definición");
  const [ammount, setAmmount] = useState(500000);

  const handleChange = ( e: any , newValue: any ) => {
    setAmmount( newValue );
  };

  useEffect(() => {
    dispatch<any>(listAsync());
  }, []);

  return (
    <div className='category'>
      {/* <Details /> */}
      <div className='category__container'>
        <div className='category__title'>
          <h3 className='detail__title'>
            <i>PRODUCTOS</i>
          </h3>
        </div>
        <div className='category__selector'>
          <p className='detail__price'>Precio</p>
          {/* <Slider
            value={ammount}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            min={0}
            max={500000}
            valueLabelDisplay="auto"
            color="secondary"
          /> */}
        </div>
        {/* flex */}
        <div className='category__containerFlex'>
          <div className='category__containerFlexLineOne'>
            <h2 className='detail__title'>Productos Tendencia</h2>
            <div className='category__contentFlex'>
              <h4
                className='category__option'
                onClick={() => setFilter("Definición")}
              >
                Definición
              </h4>
              <h4
                className='category__option'
                onClick={() => setFilter("Aumento")}
              >
                Aumento
              </h4>
              <h4
                className='category__option'
                onClick={() => setFilter("Competición")}
              >
                Competición
              </h4>
              <h4
                className='category__option'
                onClick={() => setFilter("Funcional")}
              >
                Funcional
              </h4>
            </div>
          </div>
          <div className='category__containerFlexLineTwo'>
            {
              (!products)
              ? <Loader />
              : products
              .filter(( item: any ) => item.categoria === filter)
              .filter((item: any ) => item.precio < ammount)
              .map(( item: any , index: number ) => (
                <Product key={ index } product={ item } />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage;