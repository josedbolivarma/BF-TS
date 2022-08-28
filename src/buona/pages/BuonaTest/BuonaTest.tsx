import 'react-responsive-modal/styles.css';

import { useState } from 'react';
import { Modal } from 'react-responsive-modal';

import styles from './BuonaTest.module.scss';

export const BuonaTest = () => {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [tmb, setTmb] = useState(0);
  const [edad, setEdad] = useState(19);
  const [objetivo, setObjetivo] = useState<any>(0);
  const [sexo, setSexo] = useState<any>(0);
  const [actividad, setActividad] = useState<any>(0);
  const [logro, setLogro] = useState(0);
  const [imc, setImc] = useState<any>(0);

  /******Eventos para Modal de simulación de Compra*/
  const [open, setOpen] =  useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] =  useState(false);

  const handleOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };


  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  const calculateTmb = () => {
    const alturaM = altura / 100;

    const TMB = Math.round( (10 * peso + 6.25 * altura - 5 * edad + sexo) * actividad );
    const L = Math.round(TMB * objetivo );

    if (isNaN(TMB) || isNaN(L)) {
      setOpen(true);
    } else if (TMB < 600) {
      setOpen(true);
    } else {
      setTmb(TMB);
      setLogro(L);
      setImc((peso / (alturaM * alturaM)).toFixed(2));
      setOpen1(true);
    }
  };

  function verifyImc() {
    if (imc < 18.5) {
      return "Bajo Peso, se recomienda una fase de aumento.";
    } else if (imc < 24.9) {
      return "Peso Normal, se recomienda incrementar o recomponer.";
    } else if (imc < 29.9) {
      return "Un poco por encima, se recomienda recomponer.";
    } else if (imc < 34.9) {
      return "Obesidad Grado 1, se recomienda disminuir.";
    } else if (imc < 39.9) {
      return "Obesidad Grado 2, se recomienda disminuir.";
    }
  }

  function verifyObj() {
    if (objetivo === 1.2) {
      return `Para incrementar el peso, debes tener en cuenta que el objetivo es la ganancia de masa muscular,
        por lo que se deben valorar diferentes campos. Para tu peso de ${peso}Kg, son recomendables de ${
        peso * 2.2
      }
        a ${peso * 2.6} gramos de proteína. Puedes manejar un rango de ${
        peso * 0.8
      } a ${peso} gramos grasa al día. Como
        fundamento global tomaremos estrictamente el rango máximo ${
          peso * 2.6
        } gramos de proteína y ${peso} gramos de 
        grasa, con esto bajo el principio de calorías que encuentras en nuestra ventana 'Como Interpretar los datos',
        ya llevas ${peso * 2.6 * 4 + peso * 9} calorías, es decir faltan ${
        logro - (peso * 2.6 * 4 + peso * 9)
      } calorías
        equivalentes a ${
          (logro - (peso * 2.6 * 4 + peso * 9)) / 4
        } gramos de carbohidratos.`;
    } else if (objetivo === 0.8) {
      return `Para disminuir el peso, debes tener en cuenta que el objetivo es la protección de masa muscular,
        por lo que se deben valorar diferentes campos. Para tu peso de ${peso}Kg, son recomendables de ${
        peso * 2.8
      }
        a ${peso * 3} gramos de proteína. Puedes manejar un rango de ${
        peso * 0.8
      } a ${peso} gramos grasa al día. Como
        fundamento global tomaremos estrictamente el rango mínimo ${
          peso * 2.8
        } gramos de proteína y ${peso * 0.8} gramos de 
        grasa, con esto bajo el principio de calorías que encuentras en nuestra ventana 'Como Interpretar los datos',
        ya llevas ${
          peso * 2.8 * 4 + peso * 0.8 * 9
        } calorías, es decir faltan ${
        logro - (peso * 2.8 * 4 + peso * 0.8 * 9)
      } calorías 
        equivalentes a ${
          (logro - (peso * 2.8 * 4 + peso * 0.8 * 9)) / 4
        } gramos de carbohidratos.`;
    } else if (objetivo === 1) {
      return `Para mantener el peso, debes tener en cuenta que el objetivo es la recomposición corporal de masa muscular,
        por lo que se deben valorar diferentes campos. Para tu peso de ${peso}Kg, son recomendables de ${
        peso * 2.0
      }
        a ${peso * 2.2} gramos de proteína. Puedes manejar un rango de ${
        peso * 0.8
      } a ${peso} gramos grasa al día. Como
        fundamento global tomaremos estrictamente el rango máximo ${
          peso * 2.2
        } gramos de proteína y ${peso} gramos de 
        grasa, con esto bajo el principio de calorías que encuentras en nuestra ventana 'Como Interpretar los datos',
        ya llevas ${peso * 2.2 * 4 + peso * 1 * 9} calorías, es decir faltan ${
        logro - (peso * 2.2 * 4 + peso * 1 * 9)
      } calorías 
        equivalentes a ${
          (logro - (peso * 2.2 * 4 + peso * 1 * 9)) / 4
        } gramos de carbohidratos.`;
    }
  }
  
  return (
    <div className={ styles.buonaTest }>
        <div className={ styles.buonaTest__container }>
            <h2 className={ styles.title }>Buona Test</h2>
            <form className={ styles.buona__form }>
                <input 
                type="text"
                placeholder='Altura en cm'
                value={ altura }
                onChange={ ({ target }: any ) => setAltura( target.value )}
                />

                <input 
                type="text"
                placeholder='Peso en kg'
                value={ peso }
                onChange={ ({ target }: any ) => setPeso( target.value )}
                />

                <select 
                name="" 
                id=""
                value={ objetivo }
                onChange={ ({ target }: any ) => setObjetivo(target.value)}
                >
                    <option value={ 1.2 }>Aunmentar Peso</option>
                    <option value={ 0.8 }>Reducir Peso</option>
                    <option value={ 1 }>Mantener Peso</option>
                </select>

                <select 
                name="" 
                id=""
                value={ sexo }
                onChange={ ({ target }: any ) => setSexo(target.value)}
                >
                  <option value={ +5 }>Masculino</option>
                  <option value={ +2 }>Femenino</option>
                </select>

              <input 
              type="number" 
              placeholder='Edad'
              value={ edad }
              onChange={ ({ target }: any ) => setEdad(target.value)}
              />

              <select 
                name="" 
                id=""
                value={ actividad }
                onChange={ ({ target }: any ) => setActividad(target.value)}
                >
                  <option value={ 1.2 }>Poco o ningun ejercicio</option>
                  <option value={ 1.375 }>De 1 a 3 dias a la semana</option>
                  <option value={ 1.55 }>De 3 a 5 días a la semana</option>
                  <option value={ 1.725 }>De 6 a 7 días a la semana</option>
                  <option value={ 1.9 }>Dos veces al día, entrenamientos muy duros</option>
                </select>

                <div className={ styles.form__actions }>
                  <button 
                  type='button'
                  className="btn"
                  onClick={ calculateTmb }
                  >
                    Calcular
                  </button>

                  <button 
                  type='button'
                  className={ styles.btn }
                  onClick={ handleOpen }
                  >
                    Como Interpretar los datos
                  </button>
                </div>
            </form>
            
        </div>

        {/* MODAL */}
      
      <div>
      <Modal 
      open={ open } 
      onClose={ handleClose } 
      center
      classNames={{
        overlay: styles.customOverlay,
        modal: styles.customModal,
      }}
      >
      <div className={ styles.modal }>
          <h2>
            No has ingresado algunos Buona Datos
          </h2>
          <p id="modal-modal-description">
            Ve e ingresa esos datos, para ponernos en forma juntos 🖤
            <br />
          </p>
        </div>
      </Modal>
      </div>
    {/* MODAL */}

    <Modal 
    open={ open1 }
    onClose={ handleClose1 }
    center
    classNames={{
      overlay: styles.customOverlay,
      modal: styles.customModal,
    }}
    >
    <div className='modal-box'>
          <h2 id="modal-modal-title">
            <b>Tus Buona Resultados:</b>
            <br />
          </h2>
          <p>
            <b>TMB:</b> { tmb } Calorías diarias
          </p>
          <p>
            <b>Calorías para cumplir el objetivo:</b> {logro} Calorías diarias
          </p>
          <p>
            <b>Índice de Masa Corporal:</b> { imc }
          </p>
          <br />
          <h3 id="modal-modal-description">
            <h4 style={{ color: "orange" }}>{verifyImc()}</h4>
            <p>
              Recuerda que esta dieta se basa en el déficit y superávit del 20%.
            </p>
            <br />
          </h3>

          <h3>
            <h4>Cumpliendo el objetivo:</h4>
            <p style={{ textAlign: "justify" }}>{verifyObj()}</p>
          </h3>
        </div>
    </Modal>


      {/* MODAL DATOS INTERPRETACION */}
      <Modal
        open={open2}
        onClose={handleClose2}
        center
        classNames={{
          overlay: styles.customOverlay,
          modal: styles.customModal,
        }}
      >
        <div className='modal-box'>
          <h4>¿Que significa cada dato suministrado por el Buona Test? 🖤</h4>
          <br />

          <h3
          >
            <p>
              <b>IMC: </b>Índice de masa corporal, o método de rangos por talla
              y peso.
            </p>
            <p>
              <b>TMB: </b>Tasa metabólica basal, es la tasa de gasto energético
              (calorías).
            </p>
            <p>
              <b>Calorías: </b>Unidad representativa para el gasto de energía.
            </p>
            <p>
              <b>Calorías Objetivo: </b>Calorías de TMB en base al gasto
              asociado, múltiplicado por la tasa objetivo.
            </p>
            <p>
              <b>Calorías por gramo de grasa: </b>9 Cal.
            </p>
            <p>
              <b>Calorías por gramo de carbohidrato: </b>4 Cal.
            </p>
            <p>
              <b>Calorías por gramo de proteína: </b>4 Cal.
            </p>
            <p>
              <b>Déficit: </b>Reducción de calorías, en esta calculadora
              correspondiente al 20%, se recomienda en algunas personas un 10%.
            </p>
            <p>
              <b>Superávit: </b>Aumento de calorías, en esta calculadora
              correspondiente al 20%, se recomienda en algunas personas un 10%.
            </p>
            <p>
              <b>Recomponer:</b>Mantener las calorías de la TMB pero
              distribuidas de mejor forma, para usar la grasa en construcción de
              músculo.
            </p>
          </h3>
        </div>
      </Modal>

    </div>
  )
}

export default BuonaTest;