import { Link } from "react-router-dom";

import './HomePage.scss';
import { GalleryContainer } from "../../containers";
import { useState } from 'react';

const bannerLinks = [
  {
    categoria: 'Aumento',
    image: 'https://cdn.pixabay.com/photo/2021/01/03/03/43/man-5883500_960_720.jpg',
    url: 'gain'
  },
  {
    categoria: 'Definición',
    image: 'https://cdn.pixabay.com/photo/2020/05/12/16/45/man-5163889_960_720.jpg',
    url: 'burn'
  },
  {
    categoria: 'Funcional',
    image: 'https://cdn.pixabay.com/photo/2017/04/27/08/28/sport-2264824_960_720.jpg',
    url: '/functional'
  },
  {
    categoria: 'Competición',
    image: 'https://cdn.pixabay.com/photo/2019/12/06/15/12/boxing-4677527_960_720.jpg',
    url: '/competition'
  },
]

export const HomePage = () => {

  const [ image, setImage ] = useState({
    categoria: "TÚ DEFINES EL OBJETIVO",
    image:
      "https://www.cope.es/blogs/t-cuidamos/wp-content/uploads/sites/12/2018/12/gimnasio.jpg",
  });

  return (
    <div className='home'>
      <div className='home__opacity'>
        <img
          className='home__banner'
          src="https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053487_960_720.jpg"
          alt="Banner Principal"
        />
        <div className='banner__fadeBottom'></div>
      </div>
      <div className='category__workout'>
        <div className='category__workoutFlex'>
          <div className='category__workoutContentImage'>
            <img
              className='category__workoutImage'
              src={ image.image }
              alt="Workout 1"
            />
            <span className='category__workoutSpan'>
              { image.categoria }
            </span>
          </div>
        </div>

    {/* FILTER */}
      <div className="category__workoutFilter">
        {
          bannerLinks.map(({ categoria, image, url }) => (
            <div 
            key={ url }
            onMouseEnter={ () => setImage({
              image,
              categoria
            }) }
            className="category__workoutBox">
              <Link to={ url }>
              <img 
                className="category__workoutImage"
                src={ image }
                alt={ categoria }
            />
            <span className="category__workoutSpanTwo">
              { categoria }
            </span>
              </Link>

            </div>
          ))
        }
      </div>
        {/* <HomeFilters /> */}
    {/* Filter */}

      </div>

      {/* <SupportEngine /> */}
      
      <div className='home__container'>
        <div className='home__content'>
          <p className='home__titlePrincipal'>
            Buona Fit Innovando en el Mundo del Fitness
          </p>
          <div className='text__container'>
            <p className='home__text'>
            Buona Fit no es un proveedor, es un amigo para deportistas en busca de la excelencia.
            </p>
          </div>
        </div>
        <div className='home__images'>
          <img
            className='home__imageOne'
            src="https://img.freepik.com/free-photo/handsome-power-athletic-man-bodybuilder-fitness-muscular-body-on-dark-smoke-background-perfect-male-awesome-bodybuilder-tattoo-posing_136403-1995.jpg"
            alt="home one"
          />
          <img
            className='home__imageTwo'
            src="https://img.freepik.com/free-photo/handsome-power-athletic-man-bodybuilder-fitness-muscular-body-on-dark-smoke-background-perfect-male-awesome-bodybuilder-tattoo-posing_136403-1988.jpg"
            alt="home two"
          />
        </div>
      </div>
      <GalleryContainer />
      {/* <MapView /> */}
    </div>
  )
}

export default HomePage;