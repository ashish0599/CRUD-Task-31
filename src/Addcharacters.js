import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from './App';
import { useFormik } from "formik";
import * as yup from "yup";


// Function to Addcharacters
export function Addcharacter() {
  const characterValidationSchema = yup.object({
    character_name : yup.string().required("Enter character_name"),
    poster: yup
      .string()
      .required("Give poster URL")
      .min(4, "need a longer input"),
      description:yup.string().required("Give desccription").min(10),
      Cast:yup.string().required("Give cast name").min(0),
      
      
  });
  // To handle form validation
  const formik = useFormik({
    initialValues: { character_name: "", poster: "",description:"",Cast:"" },
     validationSchema: characterValidationSchema,
    onSubmit: (newChar) => {
      addChar(newChar)
    },
  });
  
  
  const his=useHistory();
  // Post method to add characters in API
 const addChar = (newChar) => {
    fetch(`${API}`,{
      method:"POST", 
      body: JSON.stringify(newChar),
       headers:{
         "content-Type" : "application/json"
      }})
  
    .then(() =>his.push("/character"))
   };

  return (
   
      <form className="character" onSubmit={formik.handleSubmit}>
      <TextField  id="character_name" type="text"  character_name="character_name" label="Character Name" variant="outlined" values={formik.values.character_name}  onChange={formik.handleChange}
          onBlur={formik.handleBlur} />{formik.touched.character_name && formik.errors.character_name ? formik.errors.character_name : ""}

      <TextField id="poster" type="text"  poster="poster" label="Poster" variant="outlined" values={formik.values.poster}  onChange={formik.handleChange}  onBlur={formik.handleBlur} /> {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}
     
      <TextField id="description" type="text"  description="description" label="Description" variant="outlined" values={formik.values.description}  onChange={formik.handleChange}  onBlur={formik.handleBlur} />{formik.touched.description && formik.errors.description ? formik.errors.description : ""}
      <TextField id="Cast" type="text"  Cast="Cast" label="cast" variant="outlined" values={formik.values.Cast}  onChange={formik.handleChange}  onBlur={formik.handleBlur} />{formik.touched.Cast && formik.errors.Cast ? formik.errors.Cast : ""}

      <Button variant="contained" type="submit">Add character</Button>
      <Button onClick={()=>his.goBack()} variant="contained" startIcon={<ArrowBackIosIcon />}>back</Button>
      </form>
  
  );
}