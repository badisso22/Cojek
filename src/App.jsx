import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ProjectGenPage } from './pages/ProjectGenPage'
import {Dashboard} from './pages/Dashboard'
import './App.css'

function App() {

 

  return (
   <Routes>
    <Route index element={<LandingPage />} />
    <Route path='/project-gen' element={<ProjectGenPage />} />
    <Route path='/dashboard' element={<Dashboard/>}/>
     
   </Routes>
  )
}

export default App
