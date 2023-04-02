import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from 'react';
import { API } from './global.js'

export function Dashboard({ setProjectButton }) {

  const navigate = useNavigate();

  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 bg-gray-200 p-4">

          <div className="project-creation-btn">
            <span className="pt-2 ">Projects</span>
            <IconButton
              variant="contained" onClick={() => {
              navigate('/projectCreation');
              setProjectButton(true);
              }}>
                <AddIcon color="primary"/>
            </IconButton>
          </div>
          <hr></hr>
          <GetProjects />
        </div>

        <div className="col-span-10 bg-gray-400 p-4">
          
        </div>
      </div>
    </div>
  );
}

function GetProjects() {

  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    fetch(`${API}/dashboard`)
      .then((data) => data.json())
      .then((res) => setProjects(res));
  };

  useEffect(() => getProjects(), [])

  console.log(projects)

  return (
    <div>
      {projects.map((val) => (
        <ToDisplayProjects 
          key={val._id}
          project={val.projectTitle} 
          description={val.projectDescription} />
      ))}
    </div>
  )
}

function ToDisplayProjects({ project, description}) {
  return(
    <div className="btns-projects">
      <button onClick={() => console.log(`${project} button Clicked`)}>{project}</button>
    </div>
  )
}