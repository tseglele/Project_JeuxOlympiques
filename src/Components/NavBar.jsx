import React, { useEffect } from 'react';
import './styleNav.css';

function NavBar() {
  useEffect(() => {
   

    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    const handleClick = () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    };

    hamMenu.addEventListener("click", handleClick);

    return () => {
      hamMenu.removeEventListener("click", handleClick);
    };
  }, []); 

  return (
    <div  className="navbar">
      <div className='logo'>
<img src='/images/logo.png' alt="logo"></img>
      </div>
      <div className="off-screen-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/introEscalade">Introduction</a></li>
          <li><a href="/epreuve">Epreuve</a></li>
          <li><a href="/participants">Participants</a></li>
       <li><a href="/participantVitesse">Bessa Mawem</a></li>
          <li><a href="/participantDifficulte">Oriane Bertone</a></li>
        </ul>
      </div>

      <nav>
        <div className="ham-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
