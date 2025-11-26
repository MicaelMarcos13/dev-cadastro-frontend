import { createHashRouter } from 'react-router-dom'
import Home from "./pages/Home"
import ListUsers from './pages/Home/ListUsers'
import ErrorPage from './pages/Home/ErroPage'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/Lista-de-usuarios',
    element: <ListUsers />,
    errorElement: <ErrorPage />
  }
])

export default router
