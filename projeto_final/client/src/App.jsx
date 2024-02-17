import './App.css'
import Painel from './Components/Painel/Painel'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

// import React router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/Register',
    element: <div><Register /></div>
  },
  {
    path: '/Painel',
    element: <div><Painel /></div>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App