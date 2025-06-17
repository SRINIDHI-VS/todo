import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography, Input } from '@/templates';
import { Grid, Paper } from '@mui/material';
export default function LandingPageComponent() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    router.push('/dashboard');
  };
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={10} sm={8} md={5}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h2" className="text-black mb-4">
              Login
            </Typography>

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 p-2"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 p-2"
            />
            <Button onClick={handleLogin}>Login</Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
