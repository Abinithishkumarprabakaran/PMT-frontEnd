import { useState, createContext, useContext } from 'react'
import './App.css'
import { CreateProject } from './CreateProject'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { ShowProjects } from './ShowProjects'
import { ProjectTool } from './ProjectTool'
import { Home } from './Home'
import { NavBar } from './NavBar'
import Paper from '@mui/material/Paper';
import { NotFound } from './NotFound';
import { UpdateProject } from './UpdateProject';

export const triggerCtx = createContext();

function App() {
  
  const [projectButton, setProjectButton] = useState(false)
  const bgstyles = {
    borderRadius: "0px",
    minHeight: "100vh",
  }
  return (
    <triggerCtx.Provider value={[projectButton, setProjectButton]}>
      <div className="App">
        <Paper sx={bgstyles} elevation={4}>
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/showprojects" element={ <ShowProjects/> } />
              <Route path="/projectCreation" element={<CreateProject /> }/>
              <Route path="/projectTool/:id" element={<ProjectTool /> } />
              <Route path="/updateProject/:id" element={<UpdateProject /> }/>
              <Route path="*" element={<NotFound />} />
          </Routes>
        </Paper>
      </div>
    </triggerCtx.Provider>
  )
}

// https://www.youtube.com/watch?v=uEVHJf30bWI - Drag and Drop

export default App


