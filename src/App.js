import "./App.css";
import { Switch, Route } from "react-router-dom";

import { Notfound } from "./Notfound";
import { CharacterList } from "./Characterlist";
import { Addcharacter } from "./Addcharacters";
import { Editcharacter} from "./Editcharacter";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Tooltip from "@mui/material/Tooltip";
import { useHistory } from "react-router-dom";



export const API="https://620a879392946600171c5af0.mockapi.io/crud"; //API to access data globally
export default function App() {
  const history = useHistory();
  


  

  return (
    <div className="App">
    {/* App bar contains list of links route path */}
    <AppBar position="static" className="tabcolor">
        <Toolbar disableGutters className="main-menu">
          <Tooltip disableFocusListener title="Home page"> 
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<HomeIcon />}
              onClick={() => history.push("/")}
            >
              Home
            </Button>
          </Tooltip>
         

          <Tooltip disableFocusListener title="character">
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<AssignmentIndIcon />}
              onClick={() => history.push("/character")}
            >
              Character
            </Button>
          </Tooltip>
          <Tooltip disableFocusListener title=" Add character">
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<PersonAddAltIcon />}
              onClick={() => history.push("/addcharacter")}
            >
              Add Character
            </Button>
          </Tooltip>
         
         
        </Toolbar>
       
      </AppBar>
      <hr />


      <Switch>
      <Route exact path="/character/edit/:id">
         <Editcharacter/>
        </Route>
        <Route path="/character">
      
      <CharacterList/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addcharacter">
          <Addcharacter/>
        </Route>
      


       <Route path="**">
       <Notfound /> 
       </Route>
             
        </Switch>
    </div>
  );
}
// Function to return home
 function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to DC Character List</h1>
      <img className="home-img" Alt="Dc characters" src="https://wallpapercave.com/dwp1x/wp2412839.jpg"></img> 
    </div>
  );
}
