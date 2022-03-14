import { Character } from "./Character";
import Button from '@mui/material/Button';
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from "react";
import{API} from "./App"
export function CharacterList() {
  const history=useHistory();
  
  const [character, setcharacters] = useState([]);
  const getCharacters=()=>{fetch(`${API}`,{method:"GET"})
  .then((data)=>data.json())
  .then((char)=> setcharacters(char));}

  useEffect(()=> getCharacters(),[])
  const deleteCharacter = (id)=> {
    fetch(`${API}/${id}`,{
      method:"DELETE"}).then(()=>getCharacters())
  }
  return (
    <section className="character-list">
      <div className="character-list-container">
        {character.map(({id,character_name,poster,description,Cast}, index) => (
          <Character
            key={index}
            name={character_name}
            pic={poster}
            description={description}
            cast={Cast} 
            id={id}
            editbutton={
              <Button 
            
            className="editbtn"
            color="success"
            startIcon={< EditIcon/>}
            onClick={()=>{history.push(`/character/edit/${id    }`)}}
            />
            }
            
            deleteButton={
             
            <Button 
            
            className="dltbtn"
            color="error"
            startIcon={<DeleteIcon />
           }
              onClick={()=>{
             deleteCharacter(id)
            }}></Button> }/>
            
        ))
      
        }
          
      </div>

    </section>
  );
}