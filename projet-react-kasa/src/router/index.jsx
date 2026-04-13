import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Error from '../pages/error/Error'
import Logement from '../pages/logement/Logement'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'logement/:id',
        element: <Logement />,
      },
      {
        path: 'error',
        element: <Error />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

export default router