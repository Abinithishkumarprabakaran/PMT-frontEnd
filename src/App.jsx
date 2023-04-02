import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateProject } from './CreateProject'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Dashboard } from './Dashboard'

function App() {
  
  const [projectButton, setProjectButton] = useState(false)
  
  return (
    <div className="App pl-5 py-5">

      <Routes>
					<Route path="/dashboard" element={
          <Dashboard setProjectButton={setProjectButton}/>} />
					<Route path="/projectCreation" element={
            <CreateProject trigger={projectButton} setTrigger={setProjectButton}/>
            } />
					
				</Routes>
      
    </div>
  )
}

// https://www.youtube.com/watch?v=uEVHJf30bWI - Drag and Drop

export default App

