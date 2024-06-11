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

          <button className={styles.btn_google} onClick={handleGoogle}>
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            <span>Inicio con Google</span>
          </button>

          <button className={styles.btn_facebook} onClick={handleFacebook}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
        <span>Iniciar sesión con Facebook</span>
      </button>
        </form>
        <button type="submit" className={styles.login__signInButton1} onClick={handleNavigate}>Registro</button>
        <h3 style={{marginTop:"2rem"}}>Buona Fit</h3>
        
      </div>
    </div>
  );
};

export default Login;