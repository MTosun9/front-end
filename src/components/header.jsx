// Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CalendarIcon from './CalenderIcon';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'gray' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <CalendarIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/event-manager" style={{ textDecoration: 'none', color: 'inherit' }}>
            Event Manager
          </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            Dashboard
          </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/manage-tickets" style={{ textDecoration: 'none', color: 'inherit' }}>
            Manage Tickets
          </Link>
        </Typography>
        {/* Add "Sign In" and "Sign Up" buttons on the right side with filled styles */}
        <Button
          variant="contained"
          color="inherit"
          component={Link}
          to="/signin"
          sx={{
            color: 'black',
            backgroundColor: 'white',
            marginRight: '8px',
            '&:hover': {
              backgroundColor: '#f0f0f0', // Light up effect on hover
            },
          }}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          color="inherit"
          component={Link}
          to="/signup"
          sx={{
            color: 'white',
            backgroundColor: 'black',
            '&:hover': {
              backgroundColor: '#333', // Light up effect on hover
            },
          }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
