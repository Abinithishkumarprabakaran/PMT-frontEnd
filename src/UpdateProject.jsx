import { Navigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from './global.js';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import { triggerCtx } from "./App";

const formValidationSchema = yup.object({
  projectTitle: yup
          .string()
          .required(),
  projectDescription: yup
          .string()
          .required(),
})

export function UpdateProject() {

  const { id } = useParams();

  const CustomTextField = styled(TextField)({
  height: '230px',
  });

  const [project, setProject] = useState(null)

  useEffect(() => {
    fetch(`${API}/showprojects/${id}`, {method: "GET"})
      .then((data) => data.json())
      .then((res) => setProject(res));
  })

  return project ? <UpdateProjectForm project={project} /> : <h2 className="text-3xl font-bold">Loading...</h2>;

}

function UpdateProjectForm({ project }) {

  const [projectButton, setProjectButton] = useContext(triggerCtx)

  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues: { 
        projectTitle: `${project.projectTitle}`, 
        projectDescription: `${project.projectDescription}`,
      },
    validationSchema: formValidationSchema,
    onSubmit: (projectDetails) => {
      console.log(projectDetails)
      updateProject(projectDetails)
    }
  });

  const navigate = useNavigate();

  const updateProject = async (projectDetails) => {
    
    const data = await fetch(`${API}/updateProject/${project._id}`, {
        method: "PUT",
        body: JSON.stringify(projectDetails),
        headers: {
            "Content-Type": "application/json",
        },
    });

    navigate(`/projectTool/${project._id}`)
};

  return ( projectButton ) ? (
    <div className="popup">
      <form className="popup-inner" onSubmit={handleSubmit}>

        <div className="close-btn">
          <IconButton onClick={()=>{
            navigate(`/projectTool/${project._id}`)
            setProjectButton(false)}}> 
              <CloseIcon /> 
          </IconButton> 
        </div>

        <h4 className='text-2xl font-bold'>Project Title</h4>
        <TextField
          name="projectTitle"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.projectTitle}
          label="Project Title" 
          variant="outlined" 
          error={errors.projectTitle && touched.projectTitle}
          helperText={errors.projectTitle && touched.projectTitle ? errors.projectTitle: null}
          />

        <h4 className='text-2xl font-bold'>Project Description</h4>
        <TextField 
          name="projectDescription"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.projectDescription}
          label="Project Description" 
          variant="outlined" 
          error={errors.projectDescription && touched.projectDescription}
          helperText={errors.projectDescription && touched.projectDescription ? errors.projectDescription: null}
          />

        <div className='project-btn'>
          <Button type="submit" variant='outlined' color="success">Save</Button>
        </div>

      </form>
    </div>
  ) : "";
}
