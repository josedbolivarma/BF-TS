import { Gallery } from "../../components"

import './GalleryContainer.scss';

export const GalleryContainer = () => {
  return (
    <div className='root_galleryContainer'>
    <div className='galleryContainer__title'>
      <p className='galleryContainer__titlePrincipal'>
        No esperes más
      </p>
      <p className='galleryContainer__titleSecondary'>
        ¡Los más vendidos para Deportistas!
      </p>
      <div className='galleryContainer__gallery animate__animated animate__animated animate__fadeInLeft'>
          <Gallery categoria="Competición" />
      </div>
    </div>

    <div className='galleryContainer__title'>
      <p className='galleryContainer__titlePrincipal'>
        ¡Los más populares para ganancia de masa!
      </p>
      <div className='galleryContainer__gallery animate__animated animate__fadeInLeft'>
          <Gallery categoria="Aumento1" />
      </div>
    </div>

    <div className='galleryContainer__title'>
      <p className='galleryContainer__titlePrincipal'>
        ¡Lo más Funcional para gente Funcional!
      </p>
      <div className='galleryContainer__gallery animate__animated animate__fadeInLeft'>
          <Gallery categoria="Funcional" />
      </div>
    </div>
  </div>
  )
}
