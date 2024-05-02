import React,{useEffect} from 'react';
import "./style.css"
 import { slideLeft, slideUp} from '../gsap/StartAnimation'; 
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';


gsap.registerPlugin(ScrollTrigger);

export default function ParticipantDifficulteScreen() {
  const navigate = useNavigate();
  const Previous =() =>{
    navigate('/participantVitesse')
  }
 

  useEffect(() => {
    slideLeft(".participant")
 slideUp(".mountains");
 
  }, []);
 
  return (
    <div className='participantDifficulte'>
       <div className='header'>
          <NavBar></NavBar>
        </div>
<div className='page-content'>
<div className='buttons'>
        <div className='prev' onClick={Previous}></div>
       
      </div>
        
    
      <div className="mountains">
     
      </div>
</div>
      </div>
  )
}
