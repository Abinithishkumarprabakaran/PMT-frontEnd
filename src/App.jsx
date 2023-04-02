import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateProject } from './CreateProject'
import Button from '@mui/material/Button';

function App() {
  
  const [projectButton, setProjectButton] = useState(false)

  return (
    <div className="App pl-5">

      <div className="pl-5 py-5">
        <Button variant="contained" onClick={() => setProjectButton(true)}>Add Project +</Button>
        <CreateProject trigger={projectButton} setTrigger={setProjectButton}/>
      </div>
      
    </div>
  )
}

// https://www.youtube.com/watch?v=uEVHJf30bWI - Drag and Drop

export default App
