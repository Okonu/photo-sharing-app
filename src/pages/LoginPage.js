import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from './validation';

function LoginPage() {
  const firebase = useFirebase();
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!validateEmail(email)) {
        throw new Error('Invalid email');
      }
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      if (isSignUp) {
        await firebase.createUser({ email, password });
      } else {
        await firebase.login({ email, password });
      }
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Login' : 'Create an account'}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;


// function App() {
//   return (
//     <Router>
//       <div>
//         {/* <Route path="/LandingPage" exact component={LandingPage} /> */}
//         <Route path="/login" component={LoginPage} />
//       </div>
//     </Router>
//   );
// }

// export default App;
