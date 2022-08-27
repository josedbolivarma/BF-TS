import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../helpers/exerciseUrl";
import { Footer } from "../../../ui";
import { Exercise as ExerciseInterface } from "../../../interfaces/Exercises.interface";

import styles from './Exercise.module.scss';

export const Exercise = () => {
  const [exercise, setExercise] = useState<ExerciseInterface>();

  const { id } = useParams();

  useEffect(() => {
    const getData = () => {
      axios
        .get(`${ URL }/${ id }`)
        .then((resp) => {
          setExercise(resp.data);
          console.log(resp.data.musculosPorcentajes[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, [ id ]);

  return (
    <div className={styles.exercise}>
       {
        !exercise
        ? <>CARGANDO...</>
        : <>
        <div className={styles.container}>
        <div className={styles.exercise__container}>
          <video
            className={styles.video__box}
            src={ exercise.video }
            controls
            title="YouTube video player"
            poster={ exercise.poster }
            height="500"
          ></video>
        </div>
        <div></div>
      </div>
      <div className={styles.exercise__infoContainer}>
        <img
          className={styles.exercise__image}
          src={ exercise.image }
          alt="Exercise Figure"
        />

        <div className={styles.exercise__textContainer}>
          <h2 className={styles.exerciseTitle}>{ exercise.titulo }</h2>
          <div className={styles.exercise__infoDescriptions}>
            <p className={styles.detailText}>{ exercise?.descripcion1 }</p>
            <p className={styles.detailText}>{ exercise?.descripcion2 }</p>
            {/* <p className={styles.detailText}>{ exercise?.descripcion1 }</p> */}
          </div>
        </div>
      </div>  
    {/* STATISTICS */}
    <div className={styles.divider}>
        <div className={styles.divider__container}>
          <div className={styles.divider__boxAvatar}>
          <img className={styles.divider__boxImage} src={ exercise.poster }/>
         
          </div>

          <div className={styles.divider__roles}>
          <div>
              <h2 className={styles.divider__statisticsTitle}>preparación <b>{ exercise.preparacion }%</b></h2>
              <progress className={styles.progress} value={ exercise.preparacion }></progress>
            </div>

            <div>
              <h2 className={styles.divider__statisticsTitle}>Duración <b>{ exercise.duracion }min - 30min</b></h2>
              <progress className={styles.progress} value={ exercise.duracion }></progress>
            </div>

            <div>
              <h2 className={styles.divider__statisticsTitle}>Complejidad <b>{ exercise.complejidad } - 3</b></h2>
              <progress className={styles.progress} value={ exercise.complejidad }></progress>
            </div>

            {/*  */}
            <div>
              <h2 className={styles.divider__statisticsTitle}>{exercise?.musculosPorcentajes[0]} {exercise?.musculosPorcentajes[1]}%</h2>
              <progress className={styles.progress} value={exercise?.musculosPorcentajes[1]} ></progress>
            </div>

            <div>
              <h2 className={styles.divider__statisticsTitle}>{exercise?.musculosPorcentajes[2]} {exercise?.musculosPorcentajes[3]}%</h2>
              <progress className={styles.progress} value={exercise?.musculosPorcentajes[3]} ></progress>
            </div>

            <div>
              <h2 className={styles.divider__statisticsTitle}>{exercise?.musculosPorcentajes[4]} {exercise?.musculosPorcentajes[5]}%</h2>
              <progress className={styles.progress} value={exercise?.musculosPorcentajes[5]} ></progress>
            </div>

            {/*  */}

            <div>
              <h2 className={styles.divider__statisticsTitle}>{exercise?.musculosPorcentajes[6]} {exercise?.musculosPorcentajes[7]}%</h2>
              <progress className={styles.progress} value={exercise?.musculosPorcentajes[7]}></progress>
            </div>

            <div>
              <h2 className={styles.divider__statisticsTitle}>{exercise?.musculosPorcentajes[8]} {exercise?.musculosPorcentajes[9]}%</h2>
              <progress className={styles.progress} value={exercise?.musculosPorcentajes[9]}></progress>
            </div>

            <div>
              <h2 className={styles.divider__statisticsTitle}>{exercise?.musculosPorcentajes[10]} {exercise?.musculosPorcentajes[11]}%</h2>
              <progress className={styles.progress} value={exercise?.musculosPorcentajes[11]}></progress>
            </div>

        {/*  */}

          </div>

        
<div>
  <h2 className={styles.divider__title}>EJERCICIO</h2>
</div>
<div>
  <h2 className={styles.divider__title}>MÚSCULOS IMPLICADOS</h2>
</div>
<div>
</div>
        </div>
      </div>
    {/* STATISTICS */}

    
      <div className={styles.exercise__listContainer}>
      <h2 className={styles.exerciseTitle}>RECOMENDACIONES</h2>

        <ol className={styles.competition__boxTwoList}>
          <li className={styles.competition__boxTwoLi}>
            <b>{exercise?.ejercicio}</b>
          </li>
          <h2 className={styles.exerciseTitle}>ERRORES MÁS FRECUENTES</h2>
          <li className={styles.competition__boxTwoLi}>
            Los errores más frecuentes y recomendaciones al ejecutar el
            ejercicio de{" "}
            <span>
              {" "}
              <b>{exercise?.titulo}</b>
            </span>
            , son:
            <ul className={styles.competition__boxListInside}>
              <li className={styles.competition__boxTwoLi}>
                <b>{exercise?.errores?.error1}</b>
              </li>
              <li className={styles.competition__boxTwoLi}>
                <b>{exercise?.errores?.error2}</b>
              </li>
              <li className={styles.competition__boxTwoLi}>
                <b>{exercise?.errores?.error3}</b>
              </li>
            </ul>
          </li>
          <li className={styles.competition__boxTwoLi}>
            <b>
              Descansa el tiempo suficiente entre cada sesión: Seguir una rutina
              de entrenamientos compensada con el descanso adecuado es otro de
              los factores a tener en cuenta para alcanzar tu objetivo. Debes
              considerar que, si has escogido el entrenamiento HIIT como método
              para definir tus músculos, este no está exento de desventajas. La
              principal es que, debido al sobre entrenamiento al que se expone
              nuestro cuerpo, el sistema nervioso central puede verse afectado y
              causar daño muscular, tensión mecánica o estrés metabólico.
            </b>
          </li>
          <p className={styles.competition__boxTwoLi}>
            Para evitar estas consecuencias,{" "}
            <b>
              debes tomar un mínimo de 48 horas de descanso entre cada sesión de
              trabajo de alta intensidad.
            </b>{" "}
            Ten en cuenta que en estos casos, prevalece la máxima de “menos es
            más”, así que con 2 o 3 entrenamientos semanales tendrías
            suficiente.
          </p>
        </ol>
      </div>
        </>
       }
    </div>
  );
};

export default Exercise;