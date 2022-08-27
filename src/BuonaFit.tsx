import { AppRoutes } from "./router"
import { Suspense } from 'react';
import { Loader } from "./ui";

export const BuonaFit = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppRoutes />
    </Suspense>
  )
}
