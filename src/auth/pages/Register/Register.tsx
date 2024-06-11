import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useForm } from "../../../hooks/useForm";

import { registerAsync } from "../../../redux/action/actionRegister";
//Material UI
// import { makeStyles } from "@material-ui/core";
// import {
//   ButtonFacebook,
//   ButtonGoogle,
//   LinkRedirect,
// } from "../styled/styledComponents";

import { loginFacebook, loginGoogle } from "../../../redux/action/actionLogin";

import styles from "./Register.module.scss";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
    name: "",
    role: "",
  });

  const { email, password, name, role } = values;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(registerAsync(email, password, name, role));
    reset();
    navigate("/");
  };
  const handleNavigate=()=>{
    navigate("/login")
}

  const handleGoogle = () => {
    dispatch(loginGoogle());
    navigate("/");
  };

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
        <h1>Regístrate Gratis</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h5>Nombre</h5>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Ingresa tu Nombre"
            onChange={handleInputChange}
          />

          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Ingresa tu email"
            onChange={handleInputChange}
          />

          <h5>Rol</h5>
          <select value={role} name="role" onChange={handleInputChange}>
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
          </select>

          <h5>Contraseña</h5>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Crea tu Contraseña"
            onChange={handleInputChange}
          />

          <button type="submit" className={styles.login__signUpButton}>
            Registro y Logueo
          </button>

          <button onClick={handleGoogle}>
            <img
              width="20px"
              height="20px"
              src={"googleIcon"}
              alt="Google Icon"
            />
            Registro con Google
          </button>

          <button onClick={handleFacebook}>
            <img
              width="20px"
              height="20px"
              src={"facebookIcon"}
              alt="Facebook Icon"
            />
            Registro con Facebook
          </button>
        </form>
        <button type="submit" className={styles.login__signInButton1} onClick={handleNavigate}>Inicio de Sesión</button>
        <h3 style={{marginTop:"2rem"}}>Buona Fit</h3>
      </div>
    </div>
  );
};

export default Register;