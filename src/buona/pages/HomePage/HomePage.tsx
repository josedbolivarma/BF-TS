import { Link } from "react-router-dom";

import './HomePage.scss';
import { HomeFilters } from '../../components';
import { GalleryContainer } from "../../containers";

export const HomePage = () => {
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
              // src={image.image}
              src='https://www.cope.es/blogs/t-cuidamos/wp-content/uploads/sites/12/2018/12/gimnasio.jpg'
              alt="Workout 1"
            />
            <span className='category__workoutSpan'>
              {/* {image.categoria} */}
            </span>
          </div>
        </div>

      {/* FILTER */}
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