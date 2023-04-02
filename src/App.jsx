import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateProject } from './CreateProject'
import Button from '@mui/material/Button';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  
  const [projectButton, setProjectButton] = useState(false)
  const navigate = useNavigate();
  return (
    <div className="App pl-5">

      <div className="pl-5 py-5">
        <Button variant="contained" onClick={() => {
          navigate('/projectCreation')
          setProjectButton(true)}}>Add Project +</Button>
        
      </div>

      <Routes>
					{/* <Route path="/" element={<Home />} /> */}
					<Route path="/projectCreation" element={
            <CreateProject trigger={projectButton} setTrigger={setProjectButton}/>
            } />
					
				</Routes>
      
    </div>
  )
}

// https://www.youtube.com/watch?v=uEVHJf30bWI - Drag and Drop

export default App
