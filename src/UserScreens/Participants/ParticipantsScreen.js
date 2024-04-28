import React,{useEffect} from 'react';
import { slideLeft, slideUp } from '../gsap/StartAnimation';
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParticipantsScreen() {
  const navigate = useNavigate();
  const handleNavigateInfoParticipant = () => {
    navigate('/infoParticipant');
  };

  useEffect(() => {
    slideLeft(".container"); 
    slideUp(".mountains")
  }, []);
 
  return (
    <div className='container'>
      <h1>Participants</h1>
      <article onClick={handleNavigateInfoParticipant} id="participants">Part1</article>
      </div>
  )
}
