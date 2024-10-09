import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
} from '@mui/material';

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // ここにサインアップのロジックを実装します
    console.log('Sign up:', { email, password, agreeTerms, agreePrivacy });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant='h5' component='h1' gutterBottom>
        Create an account
      </Typography>
      <Box component='form' onSubmit={handleSubmit} noValidate>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email'
          name='email'
          autoComplete='email'
          autoFocus
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='new-password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='confirmPassword'
          label='Confirm password'
          type='password'
          id='confirmPassword'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value='agreeTerms' color='primary' />}
          label='I agree to the Terms of Service'
          onChange={e => setAgreeTerms((e.target as HTMLInputElement).checked)}
        />
        <FormControlLabel
          control={<Checkbox value='agreePrivacy' color='primary' />}
          label='I acknowledge that I have read and understand the Privacy Policy'
          onChange={e => setAgreePrivacy((e.target as HTMLInputElement).checked)}
        />
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          Create Account
        </Button>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='body2'>
            Already have an account?{' '}
            <Link href='/login' variant='body2'>
              Log in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default SignUpForm;
