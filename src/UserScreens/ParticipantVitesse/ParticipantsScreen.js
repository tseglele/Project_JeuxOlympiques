import React,{useEffect} from 'react';
import "./style.css"
 import { slideUp} from '../gsap/StartAnimation'; 
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';


gsap.registerPlugin(ScrollTrigger);

export default function ParticipantVitesseScreen() {
  const navigate = useNavigate();
  const Previous =() =>{
    navigate('/participants')
  }
  const Next = () => {
    navigate('/participantDifficulte');
  };

  useEffect(() => {
 slideUp(".mountains");
  }, []);
 
  return (
    <div className='participantVitesse'>
       <div className='header'>
          <NavBar></NavBar>
        </div>
<div className='page-content'>
<div className='buttons'>
        <div className='prev' onClick={Previous}></div>
        <div className='next' onClick={Next}></div>
      </div>
       
      <div>
        
      </div>
      <div className="mountains">
     
      </div>
</div>
      </div>
  )
}
