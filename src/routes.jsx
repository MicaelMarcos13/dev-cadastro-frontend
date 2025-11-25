import { createHashRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import ListUsers from './pages/ListUsers/ListUsers.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/Lista-de-usuários',
    element: <ListUsers />,
    errorElement: <ErrorPage />
  }
])

export default router
