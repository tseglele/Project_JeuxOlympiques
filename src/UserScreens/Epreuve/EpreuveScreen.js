import React ,{useEffect}from 'react'
import './style.css';
import { allAnime ,ruleAnime } from '../gsap/StartAnimation';
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Epreuve() {

  const navigate = useNavigate();
  const handleNavigateParticipants = () => {
    navigate('/participants');
  };

  useEffect(() => {
    allAnime(".epreuve",".mountains")
  ruleAnime(".rules")
  }, []);
 
  return (
    < >
      <div className='epreuve'>
        <h1>Epreuve</h1>
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
          <div className=' prise one'  data-popover-content="Contenu du popover 1"></div>
          <div  className=' prise two'  data-popover-content="Contenu du popover 2 "></div>
          <div  className=' prise three ' data-popover-content="Contenu du popover 4"></div>
          <div   className=' prise four'  data-popover-content="Contenu du popover 3"></div>
          </div>
         </div>
      </section>
 
       </div>
       <div className="mountains">
      <button onClick={handleNavigateParticipants}>Voir les participants</button>
       </div>
      </>
  )
}
