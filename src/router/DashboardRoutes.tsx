import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../ui';
import { routes } from './';

export const DashboardRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        {
          routes.map(({ Component, path }) => (
            <Route key={ path } path={ path } element={ <Component /> } />
          ))
        }
      </Routes>

      <Footer />
    </>
  )
}
