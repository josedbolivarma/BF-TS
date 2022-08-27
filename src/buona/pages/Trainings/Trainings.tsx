import { useState, useEffect } from "react";
import axios from "axios";

// Material UI
import { Link} from 'react-router-dom';
import { URL } from '../../../helpers/exerciseUrl';

import styles from './Trainings.module.scss';
import { Exercise } from "../../../interfaces/Exercises.interface";
import { Loader } from "../../../ui";

export const Training = () => {

 const [characters, setCharacters] = useState([]);
 const [categoria, setCategoria] = useState('superior');
 const [complejidad, setComplejidad] = useState(1)
 const [ isLoading, setIsLoading ] = useState<boolean>( true );
 const [value, setValue] = useState('');

  console.log(characters);

  useEffect(() => {
  const getCharacters = async () => {
    setIsLoading( true );
    const movies = await axios.get(URL);
    const characterData = movies.data;
    setCharacters(characterData);  
    setIsLoading( false );  
   }
    getCharacters();
  }, [])
  

  return (
    <div className={styles.training}>
      <header className={styles.content}>
        <div className={styles.content__box}>
        <h2 className={styles.content__title}>ELIGE TU PRÓXIMO EJERCICIO</h2>
        <p className={styles.content__text}>Te mostramos toda nuestra serie de ejercicios. Con un video explícativo y una serie de reglas para hacerlos correctamente, junto con los errores más frecuentes que se comenten. Eres libre de verlos detallamente.
        </p>
        </div>
        <div className={styles.content__filter}>
          <div className={styles.content__filterContent}>
          <h2 className={styles.content__filterTitle}>CATEGORÍA</h2>
          <div className={styles.content__filterBox}>
            <div onClick={() => setCategoria('superior')} className={styles.content__filterIcon}/>
            <div onClick={() => setCategoria('inferior')} className={styles.content__filterIcon}/>
            <div onClick={() => setCategoria('core')} className={styles.content__filterIcon}/>
          </div>
          <h2 className={styles.content__filterTitle}>COMPLEJIDAD</h2>
          <div className={styles.content__filterBox} >
            <div onClick={() => setComplejidad(1)} className={styles.content__filterIcon} />
            <div onClick={() => setComplejidad(2)} className={styles.content__filterIcon} />
            <div onClick={() => setComplejidad(3)} className={styles.content__filterIcon} />
          </div>
          <div className={styles.content__search}>
          <img className={styles.content__searchIcon} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png' alt='Search Icon'/>
          <input placeholder="Elíge que quieres trabajar..." onChange={(e) => setValue(e.target.value)} type='text' className={styles.content__searchInput}/>
          </div>
          </div>
          <div className={styles.content__filterDetails}>
            <h2>{ categoria }</h2>
            <h2>{ (complejidad == 1)? 'FÁCIL': (complejidad == 2)? "NORMAL" : "DÍFICIL" }</h2>
            <h2>{ value || 'Busqueda...' }</h2>
          </div>
        </div>
        <div className={styles.grid}>
       

      {
        
        ( isLoading )
        ? <Loader />
        : (complejidad == 1 && categoria == 'superior' && value == '')?
          characters.map(( item: Exercise ) => (
          <div key={item.id} >
            {/* <Link to={`hero/${item.id}`}> */}
            <Link to={`/exercise/${item.id}`}>
            <div className={styles.gridContentItem}>
            <img className={styles.gridItem} src={item.poster} alt="post"/>
            <h2 className={styles.gridItemTitle}>{ item.titulo }</h2>
            </div>
            </Link>
            {/* </Link> */}
          </div>

        )): characters
        .filter(( item: Exercise ) => item.categoria === categoria)
        .filter(( item: Exercise ) => item.complejidad === complejidad)
        .filter(( item: Exercise ) => item.zona.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        .map(( item: Exercise ) => (
          <div key={item.id} >
            
            {/* <Link to={`hero/${item.id}`}> */}
            <Link to={`/exercise/${item.id}`}>
            <div className={styles.gridContentItem}>
            <img className={styles.gridItem} src={item.poster} alt=""/>
            <h2 className={styles.gridItemTitle}>{ item.titulo }</h2>
            </div>
            </Link>
            {/* </Link> */}
          </div>

        ))
      }
</div>
      </header>

    </div>
  );
}

export default Training;