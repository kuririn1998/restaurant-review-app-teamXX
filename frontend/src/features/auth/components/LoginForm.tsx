import React, { useState } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
  Box,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginForm: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login form submitted:', {
      usernameOrEmail,
      password,
      rememberMe,
    });
  };

  return (
    <Box component='form' onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant='h4' align='center' gutterBottom>
        Log in
      </Typography>
      <TextField
        fullWidth
        margin='normal'
        label='Username or email'
        variant='outlined'
        value={usernameOrEmail}
        onChange={e => setUsernameOrEmail(e.target.value)}
      />
      <TextField
        fullWidth
        margin='normal'
        label='Password'
        type={showPassword ? 'text' : 'password'}
        variant='outlined'
        value={password}
        onChange={e => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Button>
          ),
        }}
      />
      <Link href='#' variant='body2'>
        Forgot your password?
      </Link>
      <FormControlLabel
        control={
          <Checkbox
            value='remember'
            color='primary'
            checked={rememberMe}
            onChange={e => setRememberMe(e.target.checked)}
          />
        }
        label='Remember me'
      />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Log in
      </Button>
      <Typography variant='body2' align='center'>
        Or log in with
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant='outlined'>GitHub</Button>
        <Button variant='outlined'>Google</Button>
      </Box>
      <Typography variant='body2' align='center' sx={{ mt: 2 }}>
        Don&apos;t have an account? <Link href='#'>Sign up for free</Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
