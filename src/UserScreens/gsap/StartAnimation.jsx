import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const slideLeft =(target) =>{
    gsap.fromTo(target,  
      {x:'100%'} ,
      { 
        x: '0%', 
        duration: 1.5, 
        ease: "back.inOut(1.7)",}
     
);}

export const slideUp =(target)=>{
    gsap.fromTo(target,  
        {y:'100%'} ,
        { 
          y: '70%', 
          duration: 3, 
          ease: "linear"}
       
  )
}

export const allAnime = (target1, target2) => { var tl = gsap.timeline();

  tl.fromTo(target1, {x:'100%'} , 
  { x: '0%', duration: 1, ease: "power2.out", } );

   tl.fromTo(target2, {y:'400'} , { y: '100', duration: 2, ease: "power2.out", delay:2 } ); }

   export const ruleAnime =(target) =>{
    gsap.fromTo(target, {y:'400',marginTop:"40%"} , { y: '100',marginTop:"0%", duration: 2, ease: "power2.out", delay:1 } ); }

    
   