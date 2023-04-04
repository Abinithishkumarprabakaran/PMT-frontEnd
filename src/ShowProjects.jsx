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
      <div className="flex justify-center">
        <h1 className="font-bold text-4xl">Your Projects</h1>
      </div>
      <br></br>
      {/* <div className="grid grid-cols-12">
        <div className="col-span-4 p-5">
          {project}
        </div>
        <div className="flex justify-around col-span-8 p-5">
          {description}
          <Button variant="contained" onClick={()=>navigate(`/projectTool/${id}`)}>go to the project</Button>
        </div>
      </div> */}
      <div className='pb-5'>
        <h1 className="text-3xl">{project}</h1>
        <div className="flex pl-10">
          <p className='pr-5'>{description}</p>
          <Button variant="outlined" onClick={()=>navigate(`/projectTool/${id}`)}>Click here</Button>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}