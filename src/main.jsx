import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import { TaskProvider } from './context/TaskProvider.jsx'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/home' element={<Home/>}/>
    </Route>
  )
)







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>

    <RouterProvider router={router}>
    </RouterProvider>
    </TaskProvider>
  </StrictMode>,
)
