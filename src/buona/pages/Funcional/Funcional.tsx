import { Gallery } from '../../components';

// Styles
import '../../../scss/blog/blog.scss';

export const Funcional = () => {
  return (
    <div className='competition'>
      <img
        className='competition__banner'
        src="https://cdn.pixabay.com/photo/2017/04/27/08/28/sport-2264824_960_720.jpg"
        alt="banner"
      />
      <div className='competition__container'>
        <div className='competition__boxOne'>
          <h2 className='detail__title'>
            <i>¿Qué es entrenamiento funcional?</i>
          </h2>
          <p className='detail__text'>
            El entrenamiento funcional es el ejercicio que te permite trabajar
            todos los músculos imitando aquellos movimientos que realizas en tu
            día a día. Este tipo de entrenamiento se concentra en ejercicios
            “globales”, es decir, que realizas ejercicios que trabajan grandes
            grupos de músculos, todo lo contrario a los ejercicios focalizados
            que usualmente se trabajan con máquinas.
          </p>
          <p className='detail__text'>
            Debido a que se basa en movimientos del día a día, logras una mejor
            movilidad, mejora tu postura y el funcionamiento de tu cuerpo.
            Además, hará que te desenvuelvas mejor.
          </p>
          <p className='detail__text'>
            Para rendir al máximo nivel es necesario que el cuerpo esté
            relajado, reposado y que haya recibido las horas de descanso básicas
            para responder durante la prueba.
          </p>

          <h2 className='detail__title'>
            <i>¿Por qué debería practicar entrenamiento funcional?</i>
          </h2>
          <p className='detail__text'>
            El entrenamiento funcional es ese tipo de ejercicio que te ayudará
            con todo: mejora tu coordinación, postura, te ayuda a mantener tu
            masa muscular, a mejorar tu rendimiento y resistencia, equilibrio,
            elasticidad y fuerza. Con este ejercicio trabajarás tu cuerpo de
            pies a cabeza sin esforzarte demasiado. Así mismo, lograrás
            mantenerte en buen estado físico.
          </p>
          <p className='detail__text'>Tips para empezar:</p>
          <ol className='competition__boxTwoList'>
            <li className='competition__boxTwoLi'>
              Busca asesoría Con el entrenamiento funcional, debido a que
              utiliza varios músculos al mismo tiempo, puede que hagas algo mal
              que te lleve a una lesión; por eso es importante que trabajes con
              una persona que pueda ayudarte a corregir esos pequeños errores,
              de forma que no terminen en daños a tu cuerpo. Recuerda que
              <b>
                aquí puedes encontrar una galeria con la mejor forma de llevar a
                cabo estos ejercicios
              </b>
            </li>
            <li className='competition__boxTwoLi'>
              Calienta antes de una sesión de entrenamiento funcional. En
              especial, en este tipo de entrenamiento que requiere de casi todo
              tu cuerpo en cada ejercicio. Empezar a entrenar con el cuerpo frío
              significa que estás forzando tus músculos desde cero. Esto quiere
              decir que no tendrás la flexibilidad que necesitas, sentirás dolor
              y tendrás mayores dificultades con cada movimiento.
            </li>
            <li className='competition__boxTwoLi'>
              No olvides estirar. Estirar te va a permitir tener un mayor rango
              de flexibilidad, recuperar el músculo más rápido y liberar la
              tensión acumulada por el esfuerzo. Si no estiras, lo más probable
              es que tengas mucho dolor, molestias y no quieras volver a
              entrenar en semanas. Así que date un momento para estirar,{" "}
              <b>tu cuerpo te lo agradecerá.</b>
            </li>
          </ol>
        </div>
        <div className='competition__boxTwo'>
          <h2 className='competition__titleSecondary'>
          </h2>
          <img
            className='competition__boxTwoBanner'
            src="https://cdn.pixabay.com/photo/2019/04/14/17/54/woman-4127336_960_720.jpg"
            alt="Article Banner"
          />
          <div className='competition__boxTwoImages'>
            <img
              className='competition__articleImage'
              src="https://cdn.pixabay.com/photo/2017/11/18/05/02/yoga-2959226_960_720.jpg"
              alt="Article recommended"
            />
            <img
              className='competition__articleImage'
              src="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825__340.jpg"
              alt="Article recommended"
            />
            <img
              className='competition__articleImage'
              src="https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970__340.jpg"
              alt="Article recommended"
            />
          </div>
        </div>
      </div>
      <div className='galleryContainer__title'>
        <p className='galleryContainer__titlePrincipal'>
          ¡Conoce lo más vendido entre personas activas!
        </p>
        <div className='galleryContainer__gallery'>
          <div className="animate__animated animate__fadeInLeftBig">
            <Gallery categoria="Funcional" />
          </div>
        </div>
      </div>
      <div className='galleryContainer__title'>
        <div className='galleryContainer__gallery'>
          <p className='galleryContainer__titlePrincipal'>
            Activos con más poder
          </p>
          <div className='animate__animated animate__fadeInLeftBig'>
            <Gallery categoria="Funcional1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Funcional;
