import React, { useEffect, useState } from 'react';
import './styleParticipant.css';
import { slideLeft, slideUp } from '../gsap/StartAnimation';
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';

gsap.registerPlugin(ScrollTrigger);

export default function ParticipantsScreen() {
  const navigate = useNavigate();

  const Previous = () => {
    navigate('/epreuve');
  };

  const Next = () => {
    navigate('/participantVitesse');
  };


  useEffect(() => {
    slideLeft(".participant");
    slideUp(".mountains");
  }, []);

  const [showDescriptionDifficulte, setShowDescriptionDifficulte] = useState(false);
  const [showDescriptionVitesse, setShowDescriptionVitesse] = useState(false);

  const toggleDescriptionDifficulte = () => {
    setShowDescriptionDifficulte(!showDescriptionDifficulte);
  };

  const toggleDescriptionVitesse = () => {
    setShowDescriptionVitesse(!showDescriptionVitesse);
  };

  return (
    <div className='participants'>
      <div className='header'>
        <NavBar />
      </div>
      <div className='page-content'>
        <div className='colonnesParticipants'>
          <div className='colonneDiff'>
            <h1>Nos Participants</h1>
          </div>
          <div className='colonneVit'></div>
        </div>
        <div className='participant'>
          <div className='vitesse' >
            <img src="images/partVitesse.png" alt='candidatVitesse' onClick={toggleDescriptionDifficulte}/>
            <h2>Bassa Mawem</h2>
          </div>
          {showDescriptionDifficulte && (
            <div className="description" onClick={toggleDescriptionDifficulte}>
                 <p><span className="category">Nationalité Sportive:</span> Français</p>
      <p><span className="category">Âge:</span> 39 ans</p>
      <p><span className="category">Catégorie:</span> Vitesse</p>
      <p>Il fait d'abord de l'escalade de difficulté et grimpe dans des voies cotées 8b+.
      Plus tard, il s'adonne à l'escalade de bloc.
      Finalement, il se consacre à la troisième discipline, la vitesse.</p>
          </div>
          )}
          <div className='difficulte'>
            <img src="images/partDifficulte.png" alt='candidatDifficulte'  onClick={toggleDescriptionVitesse}/>
            <h2>Oriane Bertone</h2>
          </div>
          {showDescriptionVitesse && (
            <div className='description' onClick={toggleDescriptionVitesse}>
               <p><span className="category">Nom:</span> Oriane Bertone</p>
      <p><span className="category">Nationalité:</span> Française</p>
      <p><span className="category">Date de naissance:</span> 19 février 2005</p>
      <p><span className="category">Discipline principale:</span> Escalade de bloc</p>
      <p>Oriane Bertone est une grimpeuse française de renom, largement reconnue pour son talent exceptionnel dans l'escalade de bloc. Son style dynamique et sa capacité à résoudre des problèmes complexes font d'elle une figure emblématique de l'escalade contemporaine.</p>
            </div>
          )}
        </div>
        <div className="mountains"></div>
      </div>
      <div className='buttons'>
        <div className='prev' onClick={Previous}></div>
        <div className='next' onClick={Next}></div>
      </div>
    </div>
  );
}
