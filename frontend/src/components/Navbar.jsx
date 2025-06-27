import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='secondary'>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Link to="/" style={{TextDecoder:"none",color:"inherit"}}>
                            <MenuIcon /> </Link>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            STUDENT APP
                        </Typography>
                        <Button color="inherit">
                            <Link to="/addstudent" style={{TextDecoder:"none",color:"inherit"}}>Add Student</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/viewstudent" style={{TextDecoder:"none",color:"inherit"}}>View Student</Link>
                        </Button>
                       
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar
