import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function ParcoursScreen() {
  const startAnimation =() =>{
    gsap.fromTo(".container",  
      {opacity:0} ,
      { opacity:1, duration: 8, ease: "elastic"}
     
);}
  window.addEventListener('load', startAnimation);
  return (
    <div className='container'>
        <h1>Parcours</h1>
    </div>
  )
}
