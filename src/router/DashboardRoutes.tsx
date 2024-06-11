import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../ui';
import { Payment } from '../buona/pages';
import { routes } from './';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe (
  "pk_test_51KnArTJaDltuSn9Nj7gxjtVoXGarC9RzF3sPvQh0BLPKgXhgSCgX5syMsdIXtPOZnrnVI6LvI5Dt4KtvdpeH6mo900O0OA7PWH"
)

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

        <Route path="*" element={<Navigate to='/' />} />

        {/* <Route path='/payment' element={
          <div>
            <Elements stripe={promise}>
              <Payment /> 
            </Elements>
          </div>
        }/> */}

      </Routes>

      <Footer />
    </>
  )
}
