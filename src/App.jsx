import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <ProjectCreation />
    </div>
  )
}

export default App


function ProjectCreation() {
  const [projects, setProjects] = useState([]);

  const handleCreateProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <div>
      <h1>My Projects</h1>
      <ProjectCreationForm onCreateProject={handleCreateProject} />
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Start Date: {project.startDate}</p>
            <p>End Date: {project.endDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCreationForm({ onCreateProject }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const project = {
      name,
      description,
      startDate,
      endDate
    };

    onCreateProject(project);

    setName('');
    setDescription('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Project Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
      </div>
      <div>
        <label htmlFor="start-date">Start Date:</label>
        <input type="date" id="start-date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
      </div>
      <div>
        <label htmlFor="end-date">End Date:</label>
        <input type="date" id="end-date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
      </div>
      <button type="submit">Create Project</button>
    </form>
  );
}