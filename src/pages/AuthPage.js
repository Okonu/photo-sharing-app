import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

function AuthPage() {
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function handleLogin() {
    firebase
      .login({
        email,
        password
      })
      .catch(err => setError(err.message));
  }

  function handleRegistration() {
    firebase
      .createUser({ email, password }, { email, password })
      .catch(err => setError(err.message));
  }

  return (
    <div>
      <h1>Authentication Page</h1>
      {error && <p>{error}</p>}
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default AuthPage;
