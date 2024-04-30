import React ,{useEffect}  from 'react';
import "./style.css"
import { gsap } from "gsap";
import { allAnime} from '../gsap/StartAnimation';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';

gsap.registerPlugin(ScrollTrigger);
export default function ParcoursScreen() {
  useEffect(() => {
    allAnime(".header",".mountains");  
   }, []);
  
  return (
    <div className='parcours'>
       <div className='header'>
          <NavBar></NavBar>
        </div>
        <h1>Parcours</h1>
        <div className="mountains">
       </div>
    </div>
  )
}
