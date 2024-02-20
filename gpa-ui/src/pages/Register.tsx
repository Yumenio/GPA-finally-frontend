import axios from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';

async function signUp(userCredentials:{username:string, password:string}) {
  const api_uri = "http://localhost:8000/api/users/register";
  try {
    const response = await axios.post(api_uri, userCredentials);
    return response.data;
  } catch (error) {
    return error;
  }
}

const Register = ({setToken}:{setToken:Dispatch<SetStateAction<string>>}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpError, setSignUpError] = useState<string|null>(null);
  const navigate = useNavigate();
  
  const handleSignUp = async (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setSignUpError("Passwords do not match. Please retype your password.");
      return;
    }
    try {
      const response = await signUp({ username, password });
      if(response && response.token){
        setToken(response.token)
        navigate("/accounts");
      } else{
          // AxiosError.response contains the error message sent from backend
          setSignUpError(response.response.data)
        }
    } catch (error) {
      setSignUpError("Sign up failed. Please try again later.");
    }
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  };

  const paperStyle = {
    padding: '16px',
    display: 'flex',
    flexdirection: 'column',
  };

  const formStyle = {
    width: '80%',
    margin: 'auto',
    marginTop: '8px',
  };

  const submitButtonStyle = {
    margin: '24px 0 16px',
    background: 'linear-gradient(45deg, #4CAF50 30%, #4CAF50 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(76, 175, 80, 0.3)',
  };

  return (
     <Container component="main" maxWidth="xs" style={containerStyle}>
      <Paper elevation={3} {...paperStyle}>
        <Typography component="h1" variant="h5" style={{ marginTop: '0.5rem' }}>
          Sign Up
        </Typography>
        {signUpError && (
          <Typography variant="body2" color="error" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            {signUpError}
          </Typography>
        )}
        <form style={formStyle} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={submitButtonStyle}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </form>
        <Link to="/login" style={{ textAlign: 'center'}}>
          <p style={{marginBottom:'1rem'}}>
            Already have an account? Log in
          </p>
        </Link>
      </Paper>
    </Container>
  );
};

export default Register