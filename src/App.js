import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LoginScreen from './AdminScreens/Login/LoginScreen';
import HomeScreen from './UserScreens/Home/HomeScreen';
import EpreuveScreen from './UserScreens/Epreuve/EpreuveScreen';
import ParticipantsScreen from './UserScreens/Participants/ParticipantsScreen';
import ParticipantVitesseScreen from './UserScreens/ParticipantVitesse/ParticipantsScreen';
import ParticipantDifficulteScreen from './UserScreens/ParticipantDifficulté/ParticipantsScreen';
import  DebEscaladeScreen from './UserScreens/DebEscalade/DebEscalade';
import ParticipantListScreen from './AdminScreens/ParticipantList/ParticipantListScreen';
import ParticipantFormScreen from './AdminScreens/ParticipantForm/ParticipantFormScreen';




function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomeScreen />} /> 
        <Route path="/admin" element={<LoginScreen />} />
        <Route path="/admin/participantForm" element={<ParticipantFormScreen />} />
        <Route path="/admin/participantList" element={<ParticipantListScreen/>} />
        <Route path="/introEscalade" element={< DebEscaladeScreen/>}/>
        <Route path="/epreuve" element={<EpreuveScreen />} />
        <Route path="/participants"  element={<ParticipantsScreen/>}/>  
        <Route path="/participantVitesse"  element={<ParticipantVitesseScreen/>}/>  
        <Route path="/participantDifficulte"  element={<ParticipantDifficulteScreen/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
