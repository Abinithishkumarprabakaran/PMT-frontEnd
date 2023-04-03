import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from 'react';
import { API } from './global.js'
import { ProjectTool } from './ProjectTool.jsx';


export function ShowProjects() {

  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    fetch(`${API}/showprojects`)
      .then((data) => data.json())
      .then((res) => setProjects(res));
  };

  useEffect(() => getProjects(), [])

  // console.log(projects)

  return (
    <div>
      {projects.map((val) => (
        <GetProjects 
          key={val._id}
          project={val.projectTitle} 
          description={val.projectDescription}
          id={val._id} />
      ))}
    </div>
  );
}

function GetProjects({ id, project, description }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-4 p-5 border-2 border-black border-solid ">
          {project}
        </div>
        <div className="flex justify-around col-span-8 p-5 border-2 border-black border-solid">
          {description}
          <Button variant="contained" onClick={()=>navigate(`/projectTool/${id}`)}>go to the project</Button>
        </div>
      </div>
    </div>
  )
}