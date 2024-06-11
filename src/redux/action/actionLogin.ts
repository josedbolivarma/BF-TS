import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { facebook, google } from "../../firebase/firebaseConfig";
  
  import { typesLogin } from "../types/types";
  import { addRegisterUserFirestoreAsync } from "./actionRegister";
  
  //--------------------Logout----------------------//
  
  export const logoutAsync: any = () => {
    return (dispatch: any) => {
      const auth = getAuth();
      signOut(auth)
        .then(({ user }: any) => {
          dispatch(logoutSync());
          localStorage.removeItem("userAc");
          console.log("Adios", user);
        })
        .catch((error) => {
          console.warn(error);
        });
    };
  };
  
  export const logoutSync = () => {
    return {
      type: typesLogin.logout,
    };
  };
  
  //--------------------Login Google--------------------//
  export const loginGoogle: any = () => {
    return (dispatch: any) => {
      const auth = getAuth();
      signInWithPopup(auth, google)
        .then(({ user }: any) => {
          dispatch(loginSincronico(user?.email, user?.password));
          const role = "usuario";
          dispatch(
            addRegisterUserFirestoreAsync(
              user.email,
              user.pass,
              user.displayName,
              role,
              user.uid
            )
          );
        })
        .catch((error) => {
          console.warn(error, "No autorizado");
        });
    };
  };
  //--------------------Login Facebook--------------------//
  export const loginFacebook: any = () => {
    return (dispatch: any) => {
      const auth = getAuth();
      signInWithPopup(auth, facebook)
        .then(({ user }: any) => {
          dispatch(loginSincronico(user.email, user.password));
          const role = "usuario";
          dispatch(
            addRegisterUserFirestoreAsync(
              user.email,
              user.pass,
              user.displayName,
              role,
              user.uid
            )
          );
        })
        .catch((error) => {
          console.warn(error, "No autorizado");
        });
    };
  };
  
  //--------------------Validar usuario y contraseña--------------------//
  export const loginWithEmailPassAsync: any = (email: any, password: any) => {
    return (dispatch: any) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }: any) => {
          dispatch(loginSincronico(user.email, user.password));
        })
        .catch((error) => {
          console.warn(error, "No autorizado");
        });
    };
  };
  
  export const loginSincronico = (email: any, password: any) => {
    return {
      type: typesLogin.login,
      payload: {
        email,
        password,
      },
    };
  };
  