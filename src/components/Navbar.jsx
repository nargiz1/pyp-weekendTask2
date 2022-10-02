import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

function Navbar() {
  const favs = useSelector((state)=> state.favourites)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit"><Link to="/" style={{color:"white", textDecoration: "none"}}>Drivers</Link></Button>
          <Button color="inherit"><Link to="/favourites" style={{color:"white", textDecoration: "none"}}>Favourites <sup>{favs.length}</sup> </Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
