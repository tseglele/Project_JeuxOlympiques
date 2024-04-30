import React, { useState ,useEffect} from 'react';
import { db } from '../../firebaseConfig';
import { collection,addDoc,updateDoc,doc} from 'firebase/firestore';
import { useNavigate,useParams } from 'react-router-dom';
import './style.css';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const ParticipantFormScreen =()=>{
  const storage = getStorage();
  const navigate = useNavigate();
  const {participant} = useParams() 

  console.log(participant)

  useEffect(() => {
    if (participant) {
      setParticipantName(participant.name || '');
    /*   setBrefDesc(participant.bref_desc || '');
      setParcoursOne(participant.parcours1 || { text: '', image: '' });
      setParcoursTwo(participant.parcours2 || { text: '', image: '' });
      setParcoursThree(participant.parcours3 || { text: '', image: '' });
      setParcoursFour(participant.parcours4 || { text: '', image: '' }); */
    }
  }, []);

  const uploadImageToStorage = async (file) => {
    const storageRef = ref(storage, `participants/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
};
// declaration des différentes constantes de notre formulaire
  
    const[participantName,setParticipantName]=useState('');
   const [brefDesc, setBrefDesc] = useState("");
   const[parcoursOne, setParcoursOne ]=useState({
    text: '',
    image: ''
  }); 
   const[parcoursTwo, setParcoursTwo ]=useState({
    text: '',
    image: ''
  }); 
   const[parcoursThree, setParcoursThree ]=useState({
    text: '',
    image: ''
  }); 
   const[parcoursFour, setParcoursFour ]=useState({
    text: '',
    image: ''
  }); 
  // ajouter un participant
   const addParticipant = async(e)=>{
  e.preventDefault();
    try{

      const docRef = await addDoc(collection(db,'participants'),{
        name:participantName,
        bref_desc:brefDesc,
        parcours1: parcoursOne,
        parcours2: parcoursTwo,
        parcours3: parcoursThree,
        parcours4: parcoursFour
      });
        alert(`${docRef.id}Participant ${participantName} added successfully!`);
        setParticipantName('')
        setBrefDesc('')
        setParcoursOne({
            text: '',
            image: ''
          })
        setParcoursTwo({
            text: '',
            image: ''
          })
        setParcoursThree({
            text: '',
            image: ''
          })
        setParcoursFour({
            text: '',
            image: ''
          })
        navigate('/admin/participantList')
    }
    catch(e){
        console.error("Error adding participant:",e)
    }
   }
//Modification d'un participant
const updateParticipant = async (participant) => {
  try {
    const participantRef = doc(db, "participants", participant.id);
    await updateDoc(participantRef, {
      name: participantName,
      bref_desc: brefDesc,
      parcours1: parcoursOne,
      parcours2: parcoursTwo,
      parcours3: parcoursThree,
      parcours4: parcoursFour,
    });
    console.log(`Participant ${participantName} updated successfully!`);
  } catch (error) {
    console.log(error);
  }
}
  
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e)

  if (participant) {
updateParticipant(); }
    else {
    addParticipant();
}
};

return(
    <>
    <h1> Participant Form</h1>
    <form  onSubmit={handleSubmit}>

        Name:<br/>
        <input type="text" value={participantName} onChange={(e) =>setParticipantName(e.target.value)} /><br/>

        Bref Description :<br/>
        <textarea rows="5" cols="40" value={brefDesc} onChange={(e) =>setBrefDesc(e.target.value)} > </textarea><br/>

        Parcours 1 :<br/>
        <textarea rows="5" cols="40" value={parcoursOne.text} onChange={(e)=>{setParcoursOne({...parcoursOne,text: e.target.value})}}/>

        <input type="file"  accept=".jpg,.jpeg,.png"  onChange={async (e) => { setParcoursOne({ ...parcoursOne, image: await uploadImageToStorage(e.target.files[0]) }) }} /><br />


        Parcours 2:<br/>
        <textarea rows="5" cols="40" value={parcoursTwo.text} onChange={(e)=>{setParcoursTwo({...parcoursTwo,text: e.target.value})}}/>

        <input type="file"  accept=".jpg,.jpeg,.png" onChange={async (e) => { setParcoursTwo({ ...parcoursTwo, image: await uploadImageToStorage(e.target.files[0]) }) }} /><br />

        Parcours 3 :<br/>
        <textarea rows="5" cols="40" value={parcoursThree.text} onChange={(e)=>{setParcoursThree({...parcoursThree,text: e.target.value})}}/>

        <input type="file"  accept=".jpg,.jpeg,.png" onChange={async (e) => { setParcoursThree({ ...parcoursThree, image: await uploadImageToStorage(e.target.files[0]) }) }} /><br />

        Parcours 4 :<br/>
        <textarea rows="5" cols="40" value={parcoursFour.text} onChange={(e)=>{setParcoursFour({...parcoursFour,text: e.target.value})}}/>

        <input type="file"  accept=".jpg,.jpeg,.png" onChange={async (e) => { setParcoursFour({ ...parcoursFour, image: await uploadImageToStorage(e.target.files[0]) }) }} /><br />

<button type='submit' >Add Participant</button>
    </form>
    </>
)
}

export default ParticipantFormScreen;