import { AppRoutes } from "./router"
import { Suspense } from 'react';

export const BuonaFit = () => {
  return (
    <Suspense fallback={<h2>Cargando...</h2>}>
      <AppRoutes />
    </Suspense>
  )
}
