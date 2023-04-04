import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { triggerCtx } from "./App";

export function Home() {

  const [projectButton, setProjectButton] = useContext(triggerCtx)

  const navigate = useNavigate();

  return (
    <div>
      <div className="home">
        <img className="home-img" src='https://www.ntaskmanager.com/wp-content/uploads/2020/01/What-are-the-Project-Management-Tools-that-are-used-for-effective-Project-Planning-01.png'/>
      </div>

      <br></br>

      <div className="prj-btn">
        <div onClick={() => {
          navigate('/projectCreation')
          setProjectButton(true)
          }}>
          <label className="text-3xl font-bold">Add Project</label>
        </div>
      </div>
    </div>
  );
}