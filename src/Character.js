import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Counter } from "./counter";
import { Des } from "./Des";




export function Character({ name, pic, description,cast,deleteButton,id,editbutton}) {

  // To display characters in card
  return (
    <Card className="character-container">
      <img src={pic} alt={name} className="poster" />
      <CardContent>
        <div className="character-info">
          <div className="character-specs">
            <h3>{name} </h3>
          </div>
        <span ><h3 className='cast'>cast:</h3>{cast}</span>
         
          <Des description={description} id={id}/>
          <CardActions>
           <Counter /> {editbutton} {deleteButton}
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}