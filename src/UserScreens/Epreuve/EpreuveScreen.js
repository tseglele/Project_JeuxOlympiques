import React, { useEffect, useState } from 'react';
import './style.css';
import { epreuve, ruleAnime } from '../gsap/StartAnimation';
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';
import regles from './regles.json';

gsap.registerPlugin(ScrollTrigger);

export default function Epreuve() {
  const navigate = useNavigate();

  const Previous = () => navigate('/introEscalade');
  const Next = () => navigate('/participants');

  const [activePriseId, setActivePriseId] = useState(null);

  useEffect(() => {
    epreuve(".page-content", ".mountains");
    ruleAnime(".rules");
  }, []);

  const handleClickPrise = (priseId) => {
    setActivePriseId(priseId);
  };

  return (
    <div className='epreuve'>
      <div className='header'>
        <NavBar />
        <div className='title'>
          <h1>Les Epreuves</h1>
        </div>
      </div>
      <div className='page-content'>
      <section className="rules">
          <div className="rulesDifficulte">
            <h2>Block/Difficulté</h2>
            <div className='prises'>
              {regles.prises["Block/Difficulte"].map((prise, index) => (
                <div
                  key={index}
                  className={`prise ${activePriseId === `prise${index + 1}`? 'selected' : ''}`}
                  style={{
                    backgroundImage: `url(${prise.backgroundImage})`,
                    position: prise.position,
                    top: prise.top,
                    left: prise.left
                  }}
                  onClick={() => handleClickPrise(`prise${index + 1}`)}
                >
                  {activePriseId === `prise${index + 1}` && (
                    <div
                      className="prise-content"
                      style={{
                        // Add styles to make the div visible
                        padding: 10,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {prise.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rulesVitesse">
            <h2>Vitesse</h2>
            <div className='prises'>
              {regles.prises["Vitesse"].map((prise, index) => (
                <div
                  key={index}
                  className={`prise ${activePriseId === `priseV${index + 1}`? 'selected' : ''}`}
                  style={{
                    backgroundImage: `url(${prise.backgroundImage})`,
                    position: prise.position,
                    top: prise.top,
                    left: prise.left
                  }}
                  onClick={() => handleClickPrise(`priseV${index + 1}`)}
                >
                  {activePriseId === `priseV${index + 1}` && (
                    <div
                      className="prise-content"
                      style={{
                        // Add styles to make the div visible
                        padding: 10,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {prise.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className='buttons'>
        <div className='prev' onClick={Previous}></div>
        <div className='next' onClick={Next}></div>
      </div>
      <div className="mountains"></div>
    </div>
  );
}
