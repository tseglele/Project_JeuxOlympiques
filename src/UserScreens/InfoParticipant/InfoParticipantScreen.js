import React,{useEffect} from 'react';
import { slideLeft, slideUp } from '../gsap/StartAnimation';
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfoParticipantScreen=() =>{
  const navigate = useNavigate();
  const handleNavigateParcours = () => {
    navigate('/parcours');
  };
  useEffect(() => {
    slideLeft(".container"); 
    slideUp(".mountains")
  }, []);
 
  return (
    <div  className="container">
      <h1> Info  Participant </h1>
      <button onClick={handleNavigateParcours}> Retour au parcours</button>
    </div>
  )
}

export default  InfoParticipantScreen