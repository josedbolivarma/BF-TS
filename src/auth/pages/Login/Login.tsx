import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginWithEmailPassAsync,
  loginGoogle,
  loginFacebook,
} from "../../../redux/action/actionLogin";
// import { makeStyles } from "@material-ui/core";
// import {
//   ButtonFacebook,
//   ButtonGoogle,
//   LinkRedirect,
// } from "../styled/styledComponents";
// import googleIcon from "../assets/google.png";
// import facebookIcon from "../assets/facebook.png";
import { useForm } from "../../../hooks";

import styles from "./Login.module.scss";

export const Login = () => {
  // const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { email, password, role } = values;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginWithEmailPassAsync(email, password));
    reset();
    navigate("/");
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
    navigate("/");
  };

  const handleNavigate=()=>{
      navigate("/register")
  }

  const handleFacebook = () => {
    dispatch(loginFacebook());
    navigate("/");
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__sidebar}>
        <img
          className={styles.root__sidebarImage}
          src="https://cdn.pixabay.com/photo/2018/04/04/16/44/kettlebell-3290296_960_720.jpg"
          alt="sidebar auth"
        />
      </div>

      <div className={styles.login__container}>
        <h1>Inicio de Sesión</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h5>Correo Electrónico</h5>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Ingresa tu email Registrado"
            onChange={handleInputChange}
          />

          <h5>Contraseña</h5>
          <input
            type="password"
            name="password"
            placeholder="Ingresa tu Contraseña"
            value={password}
            onChange={handleInputChange}
          />

          <button type="submit" className={styles.login__signInButton}>
            Logueate
          </button>

          <button onClick={handleGoogle}>
            
            Inicio con Google
          </button>

          <button onClick={handleFacebook}>
           
            Inicio con Facebook
          </button>
        </form>
        <button type="submit" className={styles.login__signInButton1} onClick={handleNavigate}>Registro</button>
        <h3 style={{marginTop:"2rem"}}>Buona Fit</h3>
        
      </div>
    </div>
  );
};

export default Login;