import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from './global.js';
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { useContext } from "react";
import { triggerCtx } from "./App";
import { ToolContents } from "./ToolContents.jsx";

export function ProjectTool() {

  const [setProjectButton, setTaskButton] = useContext(triggerCtx)

  const { id } = useParams();

  const [project, setProject] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API}/showprojects/${id}`)
      .then((data) => data.json())
      .then((res) => setProject(res));
  }, [id])

  // console.log(project)

  return (
    <div>
      <div className="grid grid-cols-1">
        <div className="col-span-1 flex pl-5 pr-5">
          <div className="flex">
            <h1 className="text-3xl font-bold ">{project.projectTitle}</h1>
            <IconButton onClick={()=>{
              navigate(`/updateProject/${id}`)
              setProjectButton(true)}}>
              <SettingsIcon />
            </IconButton>
          </div>
          <Button 
            sx={{marginLeft:"auto"}}
            onClick={()=>{
              navigate(`/projectTool/${id}/createtask`)
              setTaskButton(true)}}
            >Add Task</Button>
        </div>
        <ToolContents />
      </div>
    </div>
  );
}