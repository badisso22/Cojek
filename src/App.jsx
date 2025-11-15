import { Routes, Route } from 'react-router-dom';
import { ChatbotInput } from './components/ChatbotInput';
import { LandingPage } from './pages/LandingPage';
import { ChatMessages } from './components/ChatMessages';
import { ProjectGenPage } from './pages/ProjectGenPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

import './App.css'

function App() {

 

  return (
   <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path='/project-gen' element={<ProjectGenPage />} />
    <Route path='/chatbot-input' element={<ChatbotInput />}></Route>
     <Route path='/chatbot-messages' element={<ChatMessages  />}></Route>

   </Routes>
  )
}

export default App
