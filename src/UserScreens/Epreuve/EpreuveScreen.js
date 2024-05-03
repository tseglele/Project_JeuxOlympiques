import React, { useEffect, useState } from 'react';
import './styleEpreuve.css';
import { epreuve, ruleAnime } from '../gsap/StartAnimation';
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';


gsap.registerPlugin(ScrollTrigger);

export default function Epreuve() {
  const navigate = useNavigate();

  const Previous = () => navigate('/introEscalade');
  const Next = () => navigate('/participants');

  
  useEffect(() => {
    epreuve(".page-content", ".mountains");
    ruleAnime(".rules");
  }, []);

  const [showPopoverD1, setShowPopoverD1] = useState(false);
  const [showPopoverD2, setShowPopoverD2] = useState(false);
  const [showPopoverD3, setShowPopoverD3] = useState(false);
  const [showPopoverD4, setShowPopoverD4] = useState(false);
  const [showPopoverD5, setShowPopoverD5] = useState(false);
  const [showPopoverV1, setShowPopoverV1] = useState(false);
  const [showPopoverV2, setShowPopoverV2] = useState(false);
  const [showPopoverV3, setShowPopoverV3] = useState(false);
  const [showPopoverV4, setShowPopoverV4] = useState(false);
  const [showPopoverV5, setShowPopoverV5] = useState(false);
  const [showPopoverV6, setShowPopoverV6] = useState(false);
  const [showPopoverV7, setShowPopoverV7] = useState(false);

  const handleClickPriseD1 = () => {
    setShowPopoverD1(!showPopoverD1);
  };

  const handleClickPriseD2 = () => {
    setShowPopoverD2(!showPopoverD2);
  };

  const handleClickPriseD3 = () => {
    setShowPopoverD3(!showPopoverD3);
  };

  const handleClickPriseD4 = () => {
    setShowPopoverD4(!showPopoverD4);
  };

  const handleClickPriseD5 = () => {
    setShowPopoverD5(!showPopoverD5);
  };

  const handleClickPriseV1 = () => {
    setShowPopoverV1(!showPopoverV1);
  };

  const handleClickPriseV2 = () => {
    setShowPopoverV2(!showPopoverV2);
  };

  const handleClickPriseV3 = () => {
    setShowPopoverV3(!showPopoverV3);
  };

  const handleClickPriseV4 = () => {
    setShowPopoverV4(!showPopoverV4);
  };

  const handleClickPriseV5 = () => {
    setShowPopoverV5(!showPopoverV5);
  };

  const handleClickPriseV6 = () => {
    setShowPopoverV6(!showPopoverV6);
  };

  const handleClickPriseV7 = () => {
    setShowPopoverV7(!showPopoverV7);
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
          <div className='priseD1' onClick={handleClickPriseD1}></div>
          <div className='priseD2' onClick={handleClickPriseD2}></div>
          <div className='priseD3' onClick={handleClickPriseD3}></div>
          <div className='priseD4' onClick={handleClickPriseD4}></div>
          <div className='priseD5' onClick={handleClickPriseD5}></div>
        </div>
      </div>

      <div className="rulesVitesse">
        <h2>Vitesse</h2>
        <div className='prises'>
          <div className='priseV1' onClick={handleClickPriseV1}></div>
          <div className='priseV2' onClick={handleClickPriseV2}></div>
          <div className='priseV3' onClick={handleClickPriseV3}></div>
          <div className='priseV4' onClick={handleClickPriseV4}></div>
          <div className='priseV5' onClick={handleClickPriseV5}></div>
          <div className='priseV6' onClick={handleClickPriseV6}></div>
          <div className='priseV7' onClick={handleClickPriseV7}></div>
        </div>
      </div>

      {showPopoverD1 && (
        <div className="prise-content" onClick={handleClickPriseD1}>
           <img src='images/non.png' alt='croix'></img>
          <p>Avant de grimper, vérifiez toujours votre matériel et assurez-vous que votre partenaire de grimpe est prêt à vous assurer correctement.</p>
        </div>
      )}

      {showPopoverD2 && (
        <div className="prise-content" onClick={handleClickPriseD2}>
          <img src='images/non.png' alt='croix'></img>
          <p>Avant de vous lancer dans une montée, prenez le temps de vous échauffer correctement. Cela aidera à prévenir les blessures et à optimiser vos performances.</p>
        </div>
      )}

      {showPopoverD3 && (
        <div className="prise-content" onClick={handleClickPriseD3}>
          <img src='images/non.png' alt='croix'></img>
          <p>Avant de grimper, observez attentivement la voie que vous allez emprunter. Repérez les prises, les sections difficiles et les points d'ancrage. Avoir une stratégie en tête peut vous aider à grimper plus efficacement.</p>
        </div>
      )}

      {showPopoverD4 && (
        <div className="prise-content" onClick={handleClickPriseD4}>
          <img src='images/non.png' alt='croix'></img>
          <p>L'escalade n'est pas seulement une question de force brute, mais aussi de technique. Apprenez à bien utiliser vos pieds, à garder votre équilibre et à trouver les meilleures positions pour économiser votre énergie.</p>
        </div>
      )}

      {showPopoverD5 && (
        <div className="prise-content" onClick={handleClickPriseD5}>
          <img src='images/non.png' alt='croix'></img>
          <p> Ne vous précipitez pas pour grimper des voies difficiles. Commencez par des voies adaptées à votre niveau et progressez graduellement. Cela vous permettra de développer vos compétences de manière sûre et efficace.</p>
        </div>
      )}

      {showPopoverV1 && (
        <div className="prise-content" onClick={handleClickPriseV1}>
          <img src='images/non.png' alt='croix'></img>
          <p>En escalade de vitesse, la moindre erreur peut coûter cher. Restez concentré sur votre ascension du début à la fin, en ignorant les distractions extérieures.</p>
        </div>
      )}

      {showPopoverV2 && (
        <div className="prise-content" onClick={handleClickPriseV2}>
          <img src='images/non.png' alt='croix'></img>
          <p>La vitesse demande une technique et une explosivité particulières. Entraînez-vous régulièrement sur des parcours de vitesse pour améliorer votre rapidité et votre coordination.</p>
        </div>
      )}

      {showPopoverV3 && (
        <div className="prise-content" onClick={handleClickPriseV3}>
          <img src='images/non.png' alt='croix'></img>
          <p> Lorsque vous grimpez rapidement, il est important de maintenir un rythme régulier. Évitez les pauses inutiles qui pourraient ralentir votre progression.</p>
        </div>
      )}

      {showPopoverV4 && (
        <div className="prise-content" onClick={handleClickPriseV4}>
          <img src='images/non.png' alt='croix'></img>
          <p>La compétition de vitesse peut être stressante. Apprenez à contrôler votre stress et à rester concentré sur votre performance, même lorsque la pression est forte.</p>
        </div>
      )}

      {showPopoverV5 && (
        <div className="prise-content" onClick={handleClickPriseV5}>
          <img src='images/non.png' alt='croix'></img>
          <p>Après chaque ascension, prenez le temps d'analyser votre performance. Identifiez les points forts et les faiblesses, et ajustez votre stratégie en conséquence pour vous améliorer continuellement.</p>
        </div>
      )}
       {showPopoverV6 && (
        <div className="prise-content" onClick={handleClickPriseV6}>
          <img src='images/non.png' alt='croix'></img>
          <p>Soyez prêt à vous adapter aux changements de conditions ou de stratégie pendant la compétition. La flexibilité mentale peut faire la différence entre la victoire et la défaite.</p>
        </div>
      )}

      {showPopoverV7 && (
        <div className="prise-content" onClick={handleClickPriseV7}>
          <img src='images/non.png' alt='croix'></img>
          <p>Gardez toujours à l'esprit l'importance du respect envers vos concurrents et des règles de la compétition. La camaraderie et le fair-play font partie intégrante de l'esprit de l'escalade sportive.</p>
        </div>
      )}
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
