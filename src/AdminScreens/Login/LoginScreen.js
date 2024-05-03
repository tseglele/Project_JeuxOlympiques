import React, { useState } from 'react';
import './style.css';
import { AUTH } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = AUTH;
  const navigate = useNavigate();

  const handleNavigateParticipantForm = () => {
    navigate('/admin/participantForm');
  };
  const handleSignIn = async () => {
   
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert('Sign in error: ' + error.message);
    } finally {
      handleNavigateParticipantForm()
    }
  };
 
 

  return (
    <div className='loginContainer'>
    <h1>Login</h1>
    <form>
      <input
        className='inputField'
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className='inputField'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
    <button className='loginButton' onClick={handleSignIn}>Connexion</button>
  </div>
  );
};

export default LoginScreen;