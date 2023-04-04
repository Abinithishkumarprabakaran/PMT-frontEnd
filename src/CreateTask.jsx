import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from './global.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from "react";
import { triggerCtx } from "./App";

const formValidationSchema = yup.object({
  taskTitle: yup
          .string()
          .required(),
  taskDescription: yup
          .string()
          .required(),
})

export function CreateTask() {

  const {id} = useParams();

  const [taskButton, setTaskButton] = useContext(triggerCtx)

  console.log(taskButton)

  const CustomTextField = styled(TextField)({
  height: '230px',
  });

  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues: { 
        taskTitle: '', 
        taskDescription: '',
      },
    validationSchema: formValidationSchema,
    onSubmit: (taskDetails) => {
      // taskDetails.taskTitle = taskDetails.taskTitle.replace(/\s/g, "");
      console.log(taskDetails)
      addTask(taskDetails)
    }
  });

  const navigate = useNavigate();

  const addTask = async (taskDetails) => {
    
    const data = await fetch(`${API}/taskCreation/${id}`, {
        method: "POST",
        body: JSON.stringify(taskDetails),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

  return ( taskButton ) ? (
    <div className="popup">
      <form className="popup-inner" onSubmit={handleSubmit}>

        <div className="close-btn">
          <IconButton onClick={()=>{
            navigate(-1)
            setTaskButton(false)}}> 
              <CloseIcon /> 
          </IconButton> 
        </div>

        <h4 className='text-2xl font-bold'>Task Title</h4>
        <TextField
          name="taskTitle"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.taskTitle}
          label="Task Title" 
          variant="outlined" 
          error={errors.taskTitle && touched.taskTitle}
          helperText={errors.taskTitle && touched.taskTitle ? errors.taskTitle: null}
          />

        <h4 className='text-2xl font-bold'>Task Description</h4>
        <TextField 
          name="taskDescription"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.taskDescription}
          label="Task Description" 
          variant="outlined" 
          error={errors.taskDescription && touched.taskDescription}
          helperText={errors.taskDescription && touched.taskDescription ? errors.taskDescription: null}
          />

        <div className='project-btn'>
          <Button type="submit" variant='outlined'>Create Task</Button>
        </div>

      </form>
    </div>
  ) : "";
}

