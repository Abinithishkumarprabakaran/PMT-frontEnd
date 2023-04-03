import { useState } from 'react'
import './App.css'
import { CreateProject } from './CreateProject'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { ShowProjects } from './ShowProjects'
import { ProjectTool } from './ProjectTool'
import { Home } from './Home'
import { NavBar } from './NavBar'
import Paper from '@mui/material/Paper';
import { NotFound } from './NotFound';

function App() {
  
  const [projectButton, setProjectButton] = useState(false)
  const bgstyles = {
    borderRadius: "0px",
    minHeight: "100vh",
  }
  return (
    <div className="App">
      <Paper sx={bgstyles} elevation={4}>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home setProjectButton={setProjectButton}/>} />
            <Route path="/dashboard" element={
              <ShowProjects setProjectButton={setProjectButton}/>} />
            <Route path="/projectCreation" element={
              <CreateProject trigger={projectButton} setTrigger={setProjectButton}/>
            }/>
            <Route path="/dashboard/:id" element={<ProjectTool />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Paper>
    </div>
  )
}

// https://www.youtube.com/watch?v=uEVHJf30bWI - Drag and Drop

export default App


