import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from "react";
import { useParams } from "react-router-dom";
import {API} from "./App";
import { useEffect } from "react";



export function Editcharacter (){
   
    const [character, setcharacters] = useState(null);
  const { id } = useParams();  // To get id from URL
  useEffect(() => {
    fetch(`${API}/${id}`)
        .then((data) => data.json())
        .then((char) => setcharacters(char))
}, [id]);
 
    
  

      return(
        <div>
            {character ? <Editchar character={character}/> : <h1>Loading</h1>}
        </div>
    )
      }

      function Editchar ({character}) {
        const [characterName, setName] = useState(character.character_name);
        const [characterPoster, setPoster] = useState(character.poster);
        const [characterdes, setdes] = useState(character.description);
        const [charactercast, setcast] = useState(character.Cast);
        const his=useHistory();
    
   
return (

   
<div className="character">
<TextField value={characterName} id="outlined-basic"  variant="outlined"  onChange={(event) => setName(event.target.value)}/>

<TextField value={characterPoster} id="outlined-basic"  variant="outlined"  onChange={(event) => setPoster(event.target.value)}/>
<TextField value={characterdes} id="outlined-basic"   variant="outlined"  onChange={(event) =>  setdes(event.target.value)}/>
<TextField value={ charactercast} id="outlined-basic" variant="outlined"  onChange={(event) => setcast(event.target.value)}/>
 
<Button  variant="contained"  onClick={()=>{
    const Updatedchar={
    character_name: characterName,
    poster: characterPoster,
    description: characterdes,
    cast: charactercast,};
    fetch(`${API}/${character.id}`,{
        method:"PUT", 
        body: JSON.stringify( Updatedchar),
         headers:{
           "content-Type" : "application/json"
        }})
      
      .then(() =>his.push("/character"))
      
   
      }}>
    save</Button>

</div>
)
}