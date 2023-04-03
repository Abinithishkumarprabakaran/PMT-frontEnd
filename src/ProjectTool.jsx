import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from './global.js'

export function ProjectTool() {

  const { id } = useParams();

  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`${API}/showprojects/${id}`)
      .then((data) => data.json())
      .then((res) => setProject(res));
  }, [id])

  // console.log(project)

  return (
    <div>
      <div className="grid grid-cols-1">
        <div className="col-span-1 flex justify-center">
          <h1 className="text-3xl font-bold">{project.projectTitle}</h1>
        </div>
        <div className="grid grid-cols-12 gap-2">

          <div className="col-span-3">
            <div className="card">
              Tasks
            </div>
          </div>

          <div className="col-span-3">
            <div className="card">
              To do
            </div>
          </div>

          <div className="col-span-3">
            <div className="card">
              In Progress
            </div>
          </div>

          <div className="col-span-3">
            <div className="card">
              Completed
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
