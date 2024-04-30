import React,{useEffect} from 'react';
import "./style.css"
import { allAnime} from '../gsap/StartAnimation';
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';


gsap.registerPlugin(ScrollTrigger);

export default function ParticipantsScreen() {
  const navigate = useNavigate();
  const handleNavigateParcours = () => {
    navigate('/parcours');
  };

  useEffect(() => {
   allAnime(".header",".mountains");  
  }, []);
 
  return (
    <div className='participants'>
       <div className='header'>
          <NavBar></NavBar>
        </div>
      <h1>Participants</h1>
      <div className="mountains">
      <button onClick={handleNavigateParcours} id="participants">Parcours</button>
      </div>
      </div>
  )
}
