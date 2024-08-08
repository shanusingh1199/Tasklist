import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
// import { TaskProvider } from './context/TaskProvider'

function App() {


  return (
    <>

      <Header/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
