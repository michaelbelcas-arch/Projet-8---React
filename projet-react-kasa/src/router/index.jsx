import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Error from '../pages/error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

export default router