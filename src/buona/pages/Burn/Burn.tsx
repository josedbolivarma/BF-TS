import { Gallery } from "../../components";

// Styles 
import '../../../scss/blog/blog.scss';

export const Burn = () => {

  return (
    <div className='competition'>
      <img
        className='competition__banner'
        src="https://cdn.pixabay.com/photo/2020/05/12/16/45/man-5163889_960_720.jpg"
        alt="banner"
      />
      <div className='competition__container'>
        <div className='competition__boxOne'>
          <h2 className='detail__title'>
            <i>¿Qué es entrenamiento para definir?</i>
          </h2>
          <p className='detail__text'>
            En cierto modo, se puede decir que no existe el entrenamiento para
            definir. Y es algo totalmente cierto. En este sentido, nuestra dieta
            es la que va a marcar la consecución de este objetivo
          </p>
          <p className='detail__text'>
            Antes de empezar, es importante saber que la definición muscular se
            consigue gracias a una reducción del porcentaje de grasa, ya que
            esta está localizada entre la piel y el músculo. Por eso debemos
            reducir la capa de tejido adiposo que cubre los músculos para que la
            forma de estos puedan saltar a la vista cada vez que te quites la
            camiseta en la playa este verano.
          </p>
          <h2 className='detail__title'>
            <i>
              ¿Cómo podemos reducir la capa de grasa que cubre nuestros
              músculos?
            </i>
          </h2>
          <p className='detail__text'>
            Para reducir grasa, tal y como hemos comentado antes, será necesario
            combinar la parte nutricional junto al tipo de entrenamiento y
            respetar los descansos para evitar la fatiga extrema. Debes tener en
            cuenta que por muchos kilos que consigas levantar en cada sesión, si
            tu ingesta calórica no está controlada, no vas a conseguir definir
            músculo.
          </p>
          <p className='detail__text'>Tips para empezar:</p>
          <ol className='competition__boxTwoList'>
            <li className='competition__boxTwoLi'>
              <b>
                El entrenamiento HIIT, tu mejor aliado: Este tipo de
                entrenamiento consiste en mezclar periodos cortos de tiempo de
                un entrenamiento muy intenso (en torno al 80% – 90% de nuestro
                ritmo cardíaco), con otros períodos a una intensidad moderada
                (60% – 70%). Es debido a la alta intensidad con la que se
                realizan los ejercicios que la pérdida de grasa sea mayor,
                además de ser más eficiente, puesto que las sesiones suelen ser
                más cortas.
              </b>
            </li>
            <li className='competition__boxTwoLi'>
              <b>Controla lo que comes:</b> Sin duda el tipo de nutrición que
              lleves a cabo en todo este período será el detalle que marcará la
              diferencia. Si quieres definir tus músculos, lo que debes hacer es
              modificar los porcentajes de los macronutrientes principales
              (carbohidratos, proteínas y grasas) de la siguiente manera:
              <ul className='competition__boxListInside'>
                <li className='competition__boxTwoLi'>
                  <b>Reduce las calorías a partir de los carbohidratos</b>:
                  distribúyelos a lo largo del día, principalmente durante el
                  desayuno, la comida y después de entrenar
                </li>
                <li className='competition__boxTwoLi'>
                  <b>Aumenta el consumo de proteínas:</b> La reducción de los
                  carbohidratos se verá compensada por el aumento de proteínas
                  para evitar la destrucción muscular. Sobre todo, consume
                  proteínas de calidad: carne magra, pescado azul o blanco,
                  marisco, huevos o esta lista de alimentos ricos en proteínas
                  vegetales.
                </li>
                <li className='competition__boxTwoLi'>
                  <b>Consume grasas saludables:</b> Evita las grasas saturadas
                  presentes en la mantequilla, cremas, carnes grasosas, frituras
                  o gran mayoría de productos procesados, y opta por grasas
                  insaturadas que proporcionan alimentos como el aguacate,
                  salmón, atún, sardinas, frutos secos, aceitunas, semillas de
                  girasol o de calabaza.
                </li>
              </ul>
            </li>
            <li className='competition__boxTwoLi'>
              <b>
                Descansa el tiempo suficiente entre cada sesión: Seguir una
                rutina de entrenamientos compensada con el descanso adecuado es
                otro de los factores a tener en cuenta para alcanzar tu
                objetivo. Debes considerar que, si has escogido el entrenamiento
                HIIT como método para definir tus músculos, este no está exento
                de desventajas. La principal es que, debido al sobre
                entrenamiento al que se expone nuestro cuerpo, el sistema
                nervioso central puede verse afectado y causar daño muscular,
                tensión mecánica o estrés metabólico.
              </b>
            </li>
            <p className='competition__boxTwoLi'>
              Para evitar estas consecuencias,{" "}
              <b>
                debes tomar un mínimo de 48 horas de descanso entre cada sesión
                de trabajo de alta intensidad.
              </b>{" "}
              Ten en cuenta que en estos casos, prevalece la máxima de “menos es
              más”, así que con 2 o 3 entrenamientos semanales tendrías
              suficiente.
            </p>
          </ol>
        </div>
        <div className='competition__boxTwo'>
          <h2 className='competition__titleSecondary'>
          </h2>
          <img
            className='competition__boxTwoBanner'
            src="https://cdn.pixabay.com/photo/2017/02/28/10/40/abs-2105416__340.jpg"
            alt="Article Banner"
          />
          <div className='competition__boxTwoImages'>
            <img
              className='competition__articleImage'
              src="https://cdn.pixabay.com/photo/2021/09/21/07/30/bodybuilder-6642675__340.jpg"
              alt="Article recommended"
            />
            <img
              className='competition__articleImage'
              src="https://cdn.pixabay.com/photo/2016/01/18/05/04/abs-1146030__340.jpg"
              alt="Article recommended"
            />
            <img
              className='competition__articleImage'
              src="https://cdn.pixabay.com/photo/2017/10/11/19/51/model-2842207__340.jpg"
              alt="Article recommended"
            />
          </div>
        </div>
      </div>
      <div className='galleryContainer__title'>
        <p className='galleryContainer__titlePrincipal'>
          ¡Conoce lo mejor para Quemar Grasa!
        </p>
        <div className='galleryContainer__gallery'>
          <div className="animate__animated animated__fadeIn">
            <Gallery categoria="Definición" />
          </div>
        </div>
      </div>
      <div className='galleryContainer__title'>
        <div className='galleryContainer__gallery'>
          <p className='galleryContainer__titlePrincipal'>
            Quema Activa y más Rápida
          </p>
          <div className="animate__animated animated__fadeIn">
            <Gallery categoria="Definición1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burn;