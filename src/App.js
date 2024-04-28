import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LoginScreen from './AdminScreens/Login/LoginScreen';
import HomeScreen from './UserScreens/Home/HomeScreen';
import EpreuveScreen from './UserScreens/Epreuve/EpreuveScreen';
import InfoParticipantScreen from './UserScreens/InfoParticipant/InfoParticipantScreen';
import ParcoursScreen from './UserScreens/Parcours/ParcoursScreen';
import ParticipantsScreen from './UserScreens/Participants/ParticipantsScreen';
import  DebEscaladeScreen from './UserScreens/DebEscalade/DebEscalade';




function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomeScreen />} /> 
        <Route path="/admin" element={<LoginScreen />} />
        <Route path="/introEscalade" element={< DebEscaladeScreen/>}/>
        <Route path="/epreuve" element={<EpreuveScreen />} />
        <Route path="/participants"  element={<ParticipantsScreen/>}/>
        <Route path="/infoParticipant"  element={<InfoParticipantScreen/>}/>
        <Route path="/parcours"  element={<ParcoursScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
