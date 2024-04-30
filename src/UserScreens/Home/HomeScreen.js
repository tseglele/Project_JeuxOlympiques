import React from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar';

function HomeScreen() {
   
  const navigate = useNavigate();
  const handleNavigateDebEscalade = () => {
    navigate('/introEscalade');
  };
  return (
    <>
           <div className="home">
             <NavBar></NavBar>
              <h1>Home</h1>
              <button className='navig' onClick={handleNavigateDebEscalade}>Aller à la Page d'Introduction </button>
           </div>
    </>
  )
}

export default HomeScreen
