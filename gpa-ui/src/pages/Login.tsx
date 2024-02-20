import axios from 'axios'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
  } from '@mui/material';
  


async function login(credentials:{username:string, password:string}){
    const api_uri = "http://localhost:8000/api/users/login"
    const user_data = await axios.post(api_uri, credentials)
    .then(response => response.data
    )
    .catch(error => console.error(error))

    return user_data
}

const Login = ({setToken}:{setToken:Dispatch<SetStateAction<string>>}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e:React.FormEvent<HTMLButtonElement>) =>{
        try{

            const userData = await login({username, password});
            if(userData && userData.token){
                setToken(userData.token)
                navigate("/accounts");
            } else{
                setLoginError("Login failed, invalid credentials.");
            }
        } catch(error){
            setLoginError("Login failed, invalid credentials.");
        }
    }

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
            <Typography component="h1" variant="h5" style={{marginTop:'0.5rem'}}>
              Log In
            </Typography>
            {loginError && (
                <Typography variant="body2" color="error" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                    {loginError}
                </Typography>
            )}
            <form style={formStyle} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
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
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                style={submitButtonStyle}
                onClick={(e) => handleLogin(e)}
              >
                Log In
              </Button>
            </form>
            <Link to="/signup" style={{ textAlign: 'center', marginTop: '1rem' }}>
              <p style={{marginBottom:'1rem'}}>
                Don't have an account? Sign up!
              </p>
            </Link>
          </Paper>
        </Container>
      );
    };

export default Login