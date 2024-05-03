import React ,{useState,useEffect}from 'react'
import './styleHome.css';
import { Link } from 'react-router-dom'; 
import NavBar from '../../Components/NavBar';
import { getStorage, ref, getDownloadURL } from "firebase/storage";




function HomeScreen() {
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, 'gs://projetlab201-3e2c6.appspot.com/videos/vidéoescalade.mp4'); 

    getDownloadURL(storageRef)
      .then((url) => {
        setVideoURL(url);
      })
      .catch((error) => {
        console.error("Error getting video URL: ", error);
      });
  }, []);
  
  return (
    <>
        <div className="home">
           <NavBar></NavBar>
           <Link to="/introEscalade" className='navig'>Aller à la Page d'Introduction</Link>
           <div className='page-content'> 
          
            
          <div className="video-container">
          <video src={videoURL} autoPlay loop muted></video>
        </div>
          <div className='colonnes'>
            <div className='colonneOne'>
 
            </div>
            <div className='colonneTwo'> 
           
             </div>
            </div>
        
            </div>
             </div>  
    </>
  )
}

export default HomeScreen
