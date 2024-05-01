import React from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
/* import videoBg from '../assets/boucleIntroSite.mp4' */

function HomeScreen() {
   
  const navigate = useNavigate();
  const handleNavigateDebEscalade = () => {
    navigate('/introEscalade');
  };
  return (
    <>
           <div className="home">
           <NavBar></NavBar>
           <div className='page-content'>
           {/* <div className="video-container">
          <video src={videoBg} autoPlay loop muted></video>
        </div> */}
           <div className='colonnes'>
            <div className='colonneOne'>

            </div>
            <div className='colonneTwo'>

            </div>
            </div>
          
    
              <button className='navig' onClick={handleNavigateDebEscalade}>Aller à la Page d'Introduction </button>
              </div>
           </div>
    </>
  )
}

export default HomeScreen
