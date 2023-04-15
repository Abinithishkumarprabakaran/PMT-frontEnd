import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from './global.js';
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { createContext, useContext } from "react";
import { triggerCtx } from "./App";
import { Column } from "./Column.jsx";
import { DragDropContext } from "react-beautiful-dnd";

export const listCtx = createContext();

export function ProjectTool() {

  const [setProjectButton, setTaskButton] = useContext(triggerCtx)

  const [tasks, setTasks] = useState([]);
  const [todos, setTodos] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const { id } = useParams();

  const [project, setProject] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API}/showprojects/${id}`)
      .then((data) => data.json())
      .then((res) => setProject(res));
  }, [id])

  // console.log(project)

  const onDragEnd = (result) => {
    console.log(result)

    const { source, destination } = result

    if(!destination){
      return
    }
    // if(destination.droppableId === source.droppableId && destination.index === source.index) {
    //   return
    // }

    let add,
        active = tasks,
        Mtodos = todos,
        Mprogress = progress,
        Mcompleted = completed

    // we are removing from the card from the source
    if (source.droppableId === "taskslist") {
      add = active[source.index];
      active.splice(source.index, 1)
    }
    else if (source.droppableId === "todoslist") {
      add = Mtodos[source.index];
      Mtodos.splice(source.index, 1)
    }
    else if (source.droppableId === "progresslist") {
      add = Mprogress[source.index];
      Mprogress.splice(source.index, 1)
    }
    else if (source.droppableId === "completedlist") {
      add = Mcompleted[source.index];
      Mcompleted.splice(source.index, 1)
    }

    // we are adding it to the destination
    if (destination.droppableId === "taskslist") {
      active.splice(destination.index, 0, add)
    }
    else if (destination.droppableId === "todoslist") {
      Mtodos.splice(destination.index, 0, add)
    }
    else if (destination.droppableId === "progresslist") {
      Mprogress.splice(destination.index, 0, add)
    }
    else if (destination.droppableId === "completedlist") {
      Mcompleted.splice(destination.index, 0, add)
    }

    console.log("Mtodos:", Mtodos)
    // update to the states
    setTasks(active)
    setTodos(Mtodos)
    setProgress(Mprogress)
    setCompleted(Mcompleted)
    
  }

  return (
    <listCtx.Provider value={[tasks, setTasks, todos, setTodos, progress, setProgress, completed, setCompleted]}>
      <DragDropContext onDragEnd={onDragEnd}>
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
            <Column />
          </div>
        </div>
      </DragDropContext>
    </listCtx.Provider>
  );
}