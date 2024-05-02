import React,{useEffect} from 'react';
import "./style.css"
 import { slideLeft, slideUp} from '../gsap/StartAnimation'; 
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';


gsap.registerPlugin(ScrollTrigger);

export default function ParticipantsScreen() {
  const navigate = useNavigate();
  const Previous =() =>{
    navigate('/epreuve')
  }
  const Next = () => {
    navigate('/parcours');
  };

  useEffect(() => {
    slideLeft(".participant")
 slideUp(".mountains");
  }, []);
 
  return (
    <div className='participants'>
       <div className='header'>
          <NavBar></NavBar>
        </div>
<div className='page-content'>
<div className='buttons'>
        <div className='prev' onClick={Previous}></div>
        <div className='next' onClick={Next}></div>
      </div>
        <div className='colonnes'>
     
        <div className='colonneOne'>
        
        </div>
        <div className='colonneTwo'>
        <h1>NosParticipants</h1>
        </div>
        </div>
      
        <div className='participant'>
        <div className='Vitesse'>
          <img src="images/candidatVitesse.png" alt='candidatVitesse'/>
        <h2>Bessa</h2>
        </div>
        <div className='Difficulté'>
        <h2>Oriane</h2>
        </div>
      <div className="mountains">
     
      </div>
</div>
      </div>
      </div>
  )
}
