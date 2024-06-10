
import { Product } from '../../components';
import { useEffect, useState } from 'react';
import { listAsync } from '../../../redux/action/actionProducts';
import { useSelector, useDispatch } from 'react-redux';

import './ProductsPage.scss';
import { Loader } from '../../../ui';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { formatoCOP } from '../../../utils';

export const ProductsPage = () => {
    
  const { products } = useSelector((store: any ) => store.products);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("Definición");
  const [ammount, setAmmount] = useState(1000000);
  
  const min = 0;
  const max = 1000000;

  const [price, setPrice] = useState({
    min,
    max
  });

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
          <form className='input_range'>
          <InputRange 
            formatLabel={price => `${formatoCOP.format(price)} COP`}
            draggableTrack
            maxValue={max}
            minValue={min}
            value={price}
            onChange={(value: any) => { setPrice({ min: value?.min < min ? min : value?.min, max: value?.max > max ? max : value?.max }) }}
            // onChangeComplete={value => setPrice({min: 10, max: Number(value)})}
          />
          </form>
        </div>
        {/* flex */}
        <div className='category__containerFlex'>
          <div className='category__containerFlexLineOne'>
            <h2 className='detail__title'>Productos Tendencia</h2>
            <div className='category__contentFlex'>
              <h4
                className={`category__option ${filter === "Definición" ? "category__option_active" : ""}`}
                onClick={() => setFilter("Definición")}
              >
                Definición
              </h4>
              <h4
                className={`category__option ${filter === "Aumento" ? "category__option_active" : ""}`}
                onClick={() => setFilter("Aumento")}
              >
                Aumento
              </h4>
              <h4
                className={`category__option ${filter === "Competición" ? "category__option_active" : ""}`}
                onClick={() => setFilter("Competición")}
              >
                Competición
              </h4>
              <h4
                className={`category__option ${filter === "Funcional" ? "category__option_active" : ""}`}
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
              .filter(( item: any ) => item?.categoria === filter)
              .filter((item: any ) => item?.precio < price?.max && item?.precio > price?.min)
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