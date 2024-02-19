import React, { Dispatch, SetStateAction } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setToken, token}:{setToken:Dispatch<SetStateAction<string>>, token:string|null}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken('');
    navigate('/');
  };

  return (
    <AppBar position="sticky" color="default" elevation={4}>
      <Toolbar style={{justifyContent:'space-between', width:'60%', margin:"0 auto"}}>
        <Typography variant="h6">
          GPA
        </Typography>
        {!token ? (
          <Button color="inherit" onClick={() => navigate('/login')}>
            Log In
          </Button>
        ) : (
          <Button color="inherit" onClick={handleLogout}>
            Log Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
