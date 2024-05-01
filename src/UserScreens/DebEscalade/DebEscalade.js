import React , { useEffect } from 'react';
import './style.css';
import { allAnime } from '../gsap/StartAnimation';
import { useNavigate} from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';

gsap.registerPlugin(ScrollTrigger);

export default function DebEscalade() {

  const navigate = useNavigate();
  const handleNavigateEpreuve = () => {
    navigate('/epreuve');
  };
  const deleteAllAnime = (target1, target2) => {
    return new Promise((resolve) => {
      var tl = gsap.timeline();
      tl.fromTo(
        target1,
        { x: '0%' },
        { x: '100%', duration: 1, ease: "power2.out" }
      );
      tl.fromTo(
        target2,
        { y: '100' },
        { y: '400', duration: 1, ease: "power2.out", delay: 0.5 }
      ).eventCallback("onComplete", resolve);
    });
  };
  
  const actionButtons = () => {
    deleteAllAnime(".page-content", ".mountains")
      .then(handleNavigateEpreuve);
  }
  

  useEffect(() => {
     allAnime(".page-content",".mountains")
  }, []); 
 
  return (
 <div className="deb-escalade"> {/*// La div principale qui contient le tout la page-content et mountains */}

 <NavBar></NavBar>
     <div className='mountains'>{/*la  div du bottom de deb-escalade */}
     <button onClick={actionButtons}>Suivant</button>
     </div>
      <div  className="page-content">{/*  // Le content de la page qui a la première animation */}
        <div  className='content'>
       
       
         <div className='img-deb'> 
         <h2>Introduction à l'escalade</h2>
         <p>Lorem ipsum dolor sit amet. Ut optio minus et aperiam repudiandae et fuga perferendis. Eum molestias dolor sed vero quibusdam cum necessitatibus nemo ut delectus quas non quibusdam sequi eum maiores adipisci qui quisquam nemo. </p>
        </div>

        <div className='overlay'>
        </div>

        </div>
        <div className='murEsc'>
          
        </div>
     </div>
     
</div>
  )
}
