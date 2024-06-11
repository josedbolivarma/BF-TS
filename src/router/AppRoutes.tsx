import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DashboardRoutes } from "./"
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PublicRouter } from "./PublicRouter";
import { Login, Register } from "../auth";
import { PrivateRouter } from "./PrivateRouter";

export const AppRoutes = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // dispatch(searchAsync(user.email))
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking]);

  if (checking) {
    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgb(238,127,55)",
          background: "black",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            width="200px"
            height="100px"
            src="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg"
            alt="Loader"
          />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter isAuth={isLoggedIn}>
              <Login />
            </PublicRouter>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRouter isAuth={isLoggedIn}>
              <Register />
            </PublicRouter>
          }
        />

        <Route 
          path="/*"
          element={
            <PrivateRouter isAuth={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
