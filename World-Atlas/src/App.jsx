import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Country from './pages/Country.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import AppLayout from './components/layout/AppLayout.jsx'
import ErrorPage from './components/UI/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/country',
        element: <Country />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },
  
])


const App = () => {
  return <RouterProvider router={router} />
  
}

export default App