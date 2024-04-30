import React ,{useEffect}from 'react'
import './style.css';
import { allAnime ,ruleAnime } from '../gsap/StartAnimation';
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';

gsap.registerPlugin(ScrollTrigger);

export default function Epreuve() {

  const navigate = useNavigate();
  const handleNavigateParticipants = () => {
    navigate('/participants');
  };

  useEffect(() => {
    allAnime(".page-content",".mountains")
  ruleAnime(".rules")
  }, []);
 
  return (

      <div className='epreuve'>
         <div className='header'>
          <NavBar></NavBar>
        <h1>Epreuve</h1>
        </div>
        <div className='page-content'>
       
        <section className="rules">
         <div className="rulesVitesse">
          <div className='prises'>
          <div className=' prise one'></div>
          <div  className=' prise two'></div>
          <div  className=' prise three'></div>
          <div   className=' prise four'></div>
          </div>
         </div>
         
         <div className="rulesDistance">
         <div className='prises'>
          <div className=' prise one'  ></div>
          <div  className=' prise two' ></div>
          <div  className=' prise three '></div>
          <div   className=' prise four'></div>
          </div>
         </div>
      </section>
      </div>
      <div className="mountains">
      <button onClick={handleNavigateParticipants}>Voir les participants</button>
       </div>
       </div>
      
  )
}
