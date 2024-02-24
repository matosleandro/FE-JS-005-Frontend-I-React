import './App.css'
import Painel from './Components/Painel/Painel'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

// import React router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Sidebar from './Components/Painel/Sidebar Section/Sidebar'
import Body from './Components/Painel/Body Section/Body'

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
    <div className='container'>
      <RouterProvider router={router}/>
      <Sidebar/>
      <Body/>
    </div>
  )
}

export default App