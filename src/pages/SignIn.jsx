import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useMutation, useApolloClient, gql} from '@apollo/client'
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Copyright} from './SignUp';
import { IS_LOGGED_IN } from '../gql/query';

const SIGNIN_USER = gql`
mutation signIn($email: String, $password: String!) {
signIn(email: $email, password: $password)
}
`;

export default function SignIn() {
  
  const [values, setValues] = useState();
  const client = useApolloClient();
  const navigate = useNavigate();
  
  const [signIn, {loading, error}] = useMutation(SIGNIN_USER, {
      onCompleted: data => {
        localStorage.setItem('token', data.signIn);
         //update the local cache
        client.writeQuery({
          query: IS_LOGGED_IN,
          data: {isLoggedIn: true}
        });
        navigate('/');
      }
  })
  const handleSubmit = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value
    })
  }
  useEffect(() => {
    document.title = "Sign In - Notedy"
    if(error) {
       return <Alert severity="error">This is an error alert — check it out!</Alert>
    }
  },[error]);

  return (<React.Fragment>
      {
          loading ? (<p>Loading...</p>) : 
      (<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={(event) => { 
              event.preventDefault();
              signIn({
                  variables: {
                      ...values
                  }
              })
            }
          } sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleSubmit}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleSubmit}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container> )}
      </React.Fragment>);
}