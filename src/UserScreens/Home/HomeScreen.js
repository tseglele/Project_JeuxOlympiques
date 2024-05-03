import React, { useState, useEffect } from 'react';
import './styleHome.css';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function HomeScreen() {
  const [videoURL, setVideoURL] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, 'gs://projetlab201-3e2c6.appspot.com/videos/vidéoescalade.mp4');

    // Ajouter un délai artificiel de 2 secondes avant de charger la vidéo
    const timeout = setTimeout(() => {
      getDownloadURL(storageRef)
        .then((url) => {
          setVideoURL(url);
        })
        .catch((error) => {
          console.error("Error getting video URL: ", error);
        })
        .finally(() => {
          setLoading(false); // Arrêter le chargement après le délai et le chargement de la vidéo
        });
    }, 4500);

    // Nettoyer le timeout lors du démontage du composant
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && ( // Afficher le composant de chargement s'il est en cours
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}

      <div className="home">
        <NavBar />
        <Link to="/introEscalade" className='navig'>Aller à la Page d'Introduction</Link>
        <div className='page-content'>
          <div className="video-container">
            <video src={videoURL} autoPlay loop muted></video>
          </div>
          <div className='colonnes'>
            <div className='colonneOne'></div>
            <div className='colonneTwo'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
