import React, { useEffect, useState } from 'react';
import "./styleVitesse.css";
import { slideUp } from '../gsap/StartAnimation';
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../Components/NavBar';
import { db } from '../../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

gsap.registerPlugin(ScrollTrigger);

export default function ParticipantVitesseScreen() {
  const navigate = useNavigate();

  const Previous = () => {
    navigate('/participants');
  };

  const Next = () => {
    navigate('/participantDifficulte');
  };

  const [participant, setParticipant] = useState(null);
  const [showEtapeOne, setShowEtapeOne] = useState(false);
  const [showEtapeTwo, setShowEtapeTwo] = useState(false);
  const [showEtapeThree, setShowEtapeThree] = useState(false);
  const [showEtapeFour, setShowEtapeFour] = useState(false);

  const toggleShowEtapeOne = () => {
    setShowEtapeOne(!showEtapeOne);
  };

  const toggleShowEtapeTwo = () => {
    setShowEtapeTwo(!showEtapeTwo);
  };

  const toggleShowEtapeThree = () => {
    setShowEtapeThree(!showEtapeThree);
  };

  const toggleShowEtapeFour = () => {
    setShowEtapeFour(!showEtapeFour);
  };

  const fetchParticipant = async () => {
    try {
      const docRef = doc(db, "participants", "qsGPt9LuBz0QcYdQ8vVg");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setParticipant(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  useEffect(() => {
    slideUp(".mountains");
    fetchParticipant();
  }, []);
  useEffect(() => {
    // Animation GSAP pour l'affichage des parcours
    gsap.from(".parcours", { x: -100, opacity: 0, duration: 0.5, stagger: 0.2 });
  }, [showEtapeOne, showEtapeTwo, showEtapeThree, showEtapeFour]);

  return (
    <div className='participantVitesse'>
      <div className='header'>
        <NavBar />
      </div>
      <div className='nameCandidat'>
        <h1>Bessa Mawem</h1>
      </div>
      <div className='page-content'>
        <div className='candidatImg'>
          <img src="images/partVitesse.png" alt="partVitesse" />
        </div>
      </div>

      <div className="candidatMountains">
        <div className='etapes'>
          <div className='etape1' onClick={toggleShowEtapeOne}>
            <img src='images/etape.png' alt='etape'></img>
          </div>
          <div className='etape2' onClick={toggleShowEtapeTwo}>
            <img src='images/etape.png' alt='etape'></img>
          </div>
          <div className='etape3' onClick={toggleShowEtapeThree}>
            <img src='images/etape.png' alt='etape'></img>
          </div>
          <div className='etape4' onClick={toggleShowEtapeFour}>
            <img src='images/etape.png' alt='etape'></img>
          </div>
        </div>
      </div>

      {participant && (
        <div>
          {showEtapeOne && (
            <div className='parcours' onClick={toggleShowEtapeOne}>
              <p>Parcours 1: {participant.parcours1.text}</p>
              <img src={participant.parcours1.image} alt={participant.name} />
            </div>
          )}

          {showEtapeTwo && (
            <div className='parcours'onClick={toggleShowEtapeTwo}>
              <p>Parcours 2: {participant.parcours2.text}</p>
              <img src={participant.parcours2.image} alt={participant.name} />
            </div>
          )}

          {showEtapeThree && (
            <div  className='parcours'onClick={toggleShowEtapeThree}>
              <p>Parcours 3: {participant.parcours3.text}</p>
              <img src={participant.parcours3.image} alt={participant.name} />
            </div>
          )}

          {showEtapeFour && (
            <div className='parcours' onClick={toggleShowEtapeFour}>
              <p>Parcours 4: {participant.parcours4.text}</p>
              <img src={participant.parcours4.image} alt={participant.name} />
            </div>
          )}
        </div>
      )}

      <div className="mountains"></div>

      <div className='buttons'>
        <div className='prev' onClick={Previous}></div>
        <div className='next' onClick={Next}></div>
      </div>
    </div>
  );
}
