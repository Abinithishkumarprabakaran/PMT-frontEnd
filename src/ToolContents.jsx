import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from './global.js';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function ToolContents() {

  const { id } = useParams();

  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/showtasks/${id}`)
      .then((data) => data.json())
      .then((res) => setTasks(res));
  }, []);

  // console.log(tasks);

  return (
    <div className="grid grid-cols-12 gap-4 p-5">

      <Droppable droppableId="taskslist">
        {(provided) => (
            <div 
                className="col-span-3 flex-col" 
                ref={provided.innerRef} 
                {...provided.droppableProps}
                >
              <div>
                <p className="titles text-lg">Tasks</p>
              </div>  
              <hr></hr>
              {tasks.map((val) => (
                <TasksMapping
                  key={val._id}
                  title={val.taskTitle}
                  description={val.taskDescription}/>
                  ))}
            </div>
          )}
      </Droppable>

      <Droppable droppableId="todoslist">
        {(provided) => (
            <div 
                className="col-span-3" 
                ref={provided.innerRef} 
                {...provided.droppableProps}
                >
              <div>
                <p className="titles text-lg">To do</p>
              </div>
              <hr></hr>
            </div>
        )}
      </Droppable>

      <Droppable droppableId="progresslist">
        {(provided) => (
          <div 
              className="col-span-3" 
              ref={provided.innerRef} 
              {...provided.droppableProps}
              >
            <div>
              <p className="titles text-lg">In Progress</p>
            </div>
            <hr></hr>
          </div>
        )}
      </Droppable>

      <Droppable droppableId="completedlist">
        {(provided) => (
          <div 
              className="col-span-3" 
              ref={provided.innerRef} 
              {...provided.droppableProps}
              >
          <div>
            <p className="titles text-lg">Completed</p>
          </div>
          <hr></hr>
        </div>
        )}
      </Droppable>

    </div>
  );
}

function TasksMapping({ title, description}) {
  return (
    <div className="py-2">
      <div className="card p-3">
        <h1 className="font-bold text-2lg pb-3">{title}</h1>
        <p className="pl-5">{description}</p>
      </div>
    </div>
  )
}
