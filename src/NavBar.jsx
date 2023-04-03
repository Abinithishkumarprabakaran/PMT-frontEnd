import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export function NavBar() {

  const navigate = useNavigate();

  return (
    <div className="pb-5">
        <AppBar position="static">
          <Toolbar>
            <Button onClick={() => navigate("/")} color="inherit" >Home</Button>
            <Button onClick={() => navigate("/showprojects")} color="inherit">Show Projects</Button>
          </Toolbar>
        </AppBar>
    </div>
  );
}