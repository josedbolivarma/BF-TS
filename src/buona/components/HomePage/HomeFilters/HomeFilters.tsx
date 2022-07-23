import { Link } from 'react-router-dom';
import './HomeFilters.scss';

export const HomeFilters = () => {
  return (
    <div className='category__workoutFilter'>
          <div
            className='category__workoutPathBox'
            // onMouseEnter={() =>
            //   setImage({
            //     categoria: "Aumento",
            //     image:
            //       "https://cdn.pixabay.com/photo/2021/01/03/03/43/man-5883500_960_720.jpg",
            //   })
            // }
           
          >
            <Link to="/aumenta">
              <img
                className='category__workoutImagePath'
                src="https://cdn.pixabay.com/photo/2021/01/03/03/43/man-5883500_960_720.jpg"
                alt="Workout Filter 1"
              />
            </Link>
          </div>
          <div
            className='category__workoutPathBox'
            // onMouseEnter={() =>
            //   setImage({
            //     categoria: "Definición",
            //     image:
            //       "https://cdn.pixabay.com/photo/2020/05/12/16/45/man-5163889_960_720.jpg",
            //   })
            // }
          
          >
            <Link to="/define">
              <img
                className='category__workoutImagePath'
                src="https://cdn.pixabay.com/photo/2020/05/12/16/45/man-5163889_960_720.jpg"
                alt="Workout Filter 1"
              />
            </Link>
          </div>
          <div
            className='category__workoutPathBox'
            // onMouseEnter={() =>
            //   setImage({
            //     categoria: "Funcional",
            //     image:
            //       "https://cdn.pixabay.com/photo/2017/04/27/08/28/sport-2264824_960_720.jpg",
            //   })
            // }
            
          >
            <Link to="/evoluciona">
              <img
                className='category__workoutImagePath'
                src="https://cdn.pixabay.com/photo/2017/04/27/08/28/sport-2264824_960_720.jpg"
                alt="Workout Filter 1"
              />
            </Link>
          </div>
          <div
            className='category__workoutPathBox'
            // onMouseEnter={() =>
            //   setImage({
            //     categoria: "Competición",
            //     image:
            //       "https://cdn.pixabay.com/photo/2019/12/06/15/12/boxing-4677527_960_720.jpg",
            //   })
            // }
           
          >
            <Link to="/compite">
              <img
                className='category__workoutImagePath'
                src="https://cdn.pixabay.com/photo/2019/12/06/15/12/boxing-4677527_960_720.jpg"
                alt="Workout Filter 1"
              />
            </Link>
          </div>
        </div>
  )
}
