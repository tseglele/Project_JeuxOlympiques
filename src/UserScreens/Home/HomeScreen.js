import React from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
   
  const navigate = useNavigate();
  const handleNavigateDebEscalade = () => {
    navigate('/introEscalade');
  };
  return (
    <>
           <>
              <h1>Home</h1>
              <button className='navig' onClick={handleNavigateDebEscalade}>Aller à la Page d'Introduction </button>
           </>
    </>
  )
}

export default HomeScreen
