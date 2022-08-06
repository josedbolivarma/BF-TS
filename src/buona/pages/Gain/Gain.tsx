import { Gallery } from "../../components"

// Styles
import '../../../scss/blog/blog.scss';

export const Gain = () => {
  return (
    <div className='competition'>
      <img
        className='competition__banner'
        src="https://cdn.pixabay.com/photo/2021/01/03/03/43/man-5883500_960_720.jpg"
        alt="banner"
      />
      <div className='competition__container'>
        <div className='competition__boxOne'>
          <h2 className='detail__title'>
            <i>¿CÓMO GANAR MASA MÚSCULAR?</i>
          </h2>
          <p className='detail__text'>
            Si estás buscando un método mágico para aumentar el volumen de tus
            músculos en un mes quizá este no sea tu artículo. Sobre todo porque
            lo primero que no queremos es poner en riesgo tu salud ni proponerte
            nada que pueda perjudicar a tu organismo. Pero si lo que esperas{" "}
            <b>
              es saber cómo incrementar el volumen de tus músculos y que los
              resultados no se esfumen en un santiamén
            </b>
            , estás en el lugar adecuado.
          </p>
          <p className='detail__text'>
            Ten en cuenta que este no es un entrenamiento para pasar del sofá al
            gimnasio. Si eres sedentario, es mejor que empieces por otro tipo de
            entrenamiento más ligero antes de plantearte una rutina de aumento
            de masa muscular.
          </p>
          <p className='detail__text'>
            Es importante que sepas que para lograr tu deseado incremento de
            masa muscular deberás combinar dos elementos inseparables: una{" "}
            <b>
              alimentación que favorezca la fabricación de músculo
              (hipertrofia),
            </b>{" "}
            donde las proteínas acaparen el protagonismo, y un entrenamiento en
            el que la regulación de la carga provoque{" "}
            <b>un incremento de fuerza máxima y del volumen muscular.</b>
          </p>
          <p className='detail__text'>
            Ahora que sabemos esto, sigamos con ...
          </p>

          <h2 className='detail__title'>
            <i>¿CÓMO GANAR MASA MUSCULAR DE MANERA SALUDABLE?</i>
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
              LA ALIMENTACIÓN PARA AUMENTAR VOLUMEN MUSCULAR: La alimentación es
              un factor clave ya que será la encargada de aportar la materia
              prima para el engrosamiento de las fibras musculares.
            </li>
            <li className='competition__boxTwoLi'>
              Suplementos proteícos para ganar masa muscular: Como casi todo en
              la vida, tomar proteína extra en la dieta no es bueno ni malo de
              por sí. Depende del uso que le demos.{" "}
              <b>
                {" "}
                Lo que no podemos hacer es cegarnos por el ansia de los
                resultados rápidos sin pensar en las consecuencias.
              </b>
            </li>
            <li className='competition__boxTwoLi'>
              Una rutina para aumentar masa muscular: A partir de aquí ya
              podemos empezar a trabajar. Lo más recomendable es{" "}
              <b>
                trabajar dos grupos musculares principales por sesión y usar dos
                variantes para cada uno.
              </b>
            </li>
          </ol>
        </div>
        <div className='competition__boxTwo'>
          <h2 className='competition__titleSecondary'>
          </h2>
          <img
            className='competition__boxTwoBanner'
            src="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg"
            alt="Article Banner"
          />
          <div className='competition__boxTwoImages'>
            <img
              className='competition__articleImage'
              src="https://cdn.pixabay.com/photo/2017/04/26/09/44/sport-2262083__340.jpg"
              alt="Article recommended"
            />
            <img
              className='competition__articleImage'
              src="https://cdn.pixabay.com/photo/2017/02/09/16/21/kettlebell-2052765__340.jpg"
              alt="Article recommended"
            />
            <img
              className='competition__articleImage'
              src="https://cdn.pixabay.com/photo/2017/09/27/18/49/sport-2792995__340.jpg"
              alt="Article recommended"
            />
          </div>
        </div>
      </div>
      <div className='galleryContainer__title'>
        <p className='galleryContainer__titlePrincipal'>
          ¡Para ponerte grande y fuerte más rápido!
        </p>
        <div className='galleryContainer__gallery'>
            <div className="animate__animated animate__fadeInLeftBig">
                <Gallery categoria="Aumento" />
            </div>
        </div>
      </div>
      <div className='galleryContainer__title'>
        <div className='galleryContainer__gallery'>
          <p className='galleryContainer__titlePrincipal'>
            Más poder Más masa
          </p>
          <div className="animate__animated animate__fadeInLeftBig">
            <Gallery categoria="Aumento1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gain;
