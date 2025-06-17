import { useState } from 'react';
import { useRouter } from 'next/router';
export default function LandingPageComponent() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    // call API to login
    router.push('/dashboard');
  };
  return (
    <>
      return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow w-80">
          <Typography>Login</Typography>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded">
            Login
          </button>
          <p className="mt-3 text-sm text-center">
            Don’t have an account? <a href="/signup" className="text-blue-600">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
}
