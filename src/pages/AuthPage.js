import React, { useState } from 'react';
import { useFirebase, useFirestore } from 'react-redux-firebase';
// import { useDispatch} from 'react-redux';
import './authPage.css';

function AuthPage() {
  const firebase = useFirebase();
  const firestore = useFirestore();
  // const dispatch = useDispatch();
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
    if (firebase)
      {
        firebase
        .createUser({ email, password }, { email, password })
      .then(({user}) => {firestore
        .collection('users')
        .doc(user.uid)
        .set({email});
      })
      .catch(err => setError(err.message));
    }
  }

  return (
    <div className="auth-page">
      <h1 className="auth-title">Login/SignUp to Access more features</h1>
      {error && <p className="error-message">{error}</p>}
      <label className="auth-label">
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label className="auth-label">
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <div className="auth-buttons">
        <button className="auth-button" onClick={handleLogin}>Login</button>
        <button className="auth-button" onClick={handleRegistration}>Register</button>
      </div>
    </div>
  );
}

export default AuthPage;
