import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export function CreateProject( props ) {

  return ( props.trigger ) ? (
    <div className="popup">
      <div className="popup-inner">

      <div className="close-btn">
        <IconButton onClick={()=>props.setTrigger(false)}> <CloseIcon /> </IconButton> 
      </div>

      <h4 className='text-3xl font-bold'>Project Title</h4>
      <TextField id="outlined-basic" label="Project Title" variant="outlined" />

      <h4 className='text-3xl font-bold'>Project Description</h4>
      <TextField id="outlined-basic" label="Project Description" variant="outlined" />

      </div>
    </div>
  ) : "";
}
