import React, { useState } from 'react';
import './style.css';
import { AUTH } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
 
  const handleSignUp = async () => {
   
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert('Sign up error: ' + error.message);
    } finally {
        handleNavigateParticipantForm()
    }
  };

  return (
    <div className='loginContainer'>
      <h1>Login</h1>
      <form>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button onClick={handleSignIn}>Connexion</button>
      <button onClick={handleSignUp}>Créer un compte</button>
    </div>
  );
};

export default LoginScreen;