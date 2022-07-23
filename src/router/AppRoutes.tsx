import { BrowserRouter } from "react-router-dom"
import { DashboardRoutes } from "./"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <DashboardRoutes />
    </BrowserRouter>
  )
}
