import React ,{ useEffect} from 'react';
import "./style.css"
import { db } from '../../firebaseConfig';
import { collection, getDocs,deleteDoc,doc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function ParticipantListScreen({navigation}) {
  const [participants, setParticipants] = React.useState([]);
  const navigate = useNavigate();

  // Récupérer les participants
  const getParticipants = async () => {
    const querySnapshot = await getDocs(collection(db, "participants"));
    const participantListCopy = []; 
     querySnapshot.docs.map(doc => {
      const participant = { id: doc.id, ...doc.data() };
      participantListCopy.push(participant);
      return participant;
    });
        setParticipants(participantListCopy);
  };
  useEffect(() => {
    
    getParticipants();
});

  //  Supprimer un participant
const deleteParticipant = async(id)=>{
  console.log(id);
  try{
    await deleteDoc(doc(db,"participants",id));
    const udaptedNbrParticipants = participants.filter((part) => part.id !== id );
    setParticipants(udaptedNbrParticipants)
  }
  catch{
    alert("Le participant a été supprimé");
  }
}
//  Modifier les détails d'un participant
const editParticipant = async (e, id) => {
  navigate(`/admin/participantForm/${id}`);
}
//  Afficher les participants 
  const displayParticipants = () => {
    return participants.map((participant, key) => {
      return (
        <tr key={key}>
        <td>{participant.name}</td>
        <td>{participant.bref_desc}</td>
        <td>{participant.parcours1.text}</td>
        <td><img src={participant.parcours1.image} alt={participant.name} /></td>
        <td>{participant.parcours2.text}</td>
        <td><img src={participant.parcours2.image} alt={participant.name} /></td>
        <td>{participant.parcours3.text}</td>
        <td><img src={participant.parcours3.image} alt={participant.name} /></td>
        <td>{participant.parcours4.text}</td>
        <td><img src={participant.parcours4.image} alt={participant.name} /></td>
        <td>
         
          <button className="editBtn" onClick={(e) => editParticipant(e, participant.id)}>Modifier</button>
          <button className='deleteBtn' onClick={()=> deleteParticipant(participant.id)} >Supprimer</button>
          </td>
      </tr>
        
      );
    });
  };



  return (
    <div>
      <h1>Liste des participants</h1>
{/* Afficher la liste des participants */}
<table className="participant-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description brève</th>
            <th>Parcours 1</th>
            <th>Image Parcours 1</th>
            <th>Parcours 2</th>
            <th>Image Parcours 2</th>
            <th>Parcours 3</th>
            <th>Image Parcours 3</th>
            <th>Parcours 4</th>
            <th>Image Parcours 4</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayParticipants()}
        </tbody>
      </table>
      <button onClick={() => navigate('/admin/participantForm')}>Ajouter un Participant</button>
    </div>
  )
}

export default ParticipantListScreen
