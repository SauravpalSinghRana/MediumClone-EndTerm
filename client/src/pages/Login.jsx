import React, { useState, useContext } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { AuthContext } from '../context/authContext';
const Login = () => {

  const imageURL='https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png';
  const [inputs, setInputs] = useState({
     username: "",
     password: "",
   });
   const [err, setError] = useState(null);
 
   const navigate = useNavigate();
 
   const {login} =useContext(AuthContext)
 
   
 
   const handleChange = (e) => {
     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       await login(inputs)
       navigate("/");
     } catch (err) {
       setError(err.response.data);
     }
   };
   
 
  return (
      <Box 
      width={500}
      height={600}
      marginLeft="auto"
      marginRight="auto"
      marginTop="30px"
      boxShadow={12}
      padding={2}>
      <img width={500}  src={imageURL} alt="Login"/>
      <TextField variant='standard' name="username" onChange={handleChange} label="Enter username" sx={{
          marginTop: '20px',
           marginLeft: '125px',
           width: '250px',

      }}/><br/>
    
      <TextField variant='standard' name="password" onChange={handleChange} label="Enter password" sx={{
          marginTop: '20px',
          marginLeft: '125px',
           width: '250px',
           

      }}/><br/>
      <Button variant='contained' onClick={handleSubmit} sx={{
           marginTop: '25px',
           marginLeft: '125px',
           width: '250px',
      }}>Login</Button>
      {err && <p>Error While Login</p>}
      <br/>
       <Typography sx={{
           marginTop: '20px',
           marginLeft: '235px',
           }}>OR</Typography>
      <Button href='/register'  sx={{
           marginTop: '20px',
           marginLeft: '125px',
           width: '250px',
           background: '#558b2f',
           color: 'white',
           "&:hover": { background: "green" }
           }}>Create new account</Button>

           <Typography sx={{
              fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 'small',
              marginTop: '40px',
              color: 'GrayText',
              textAlign: 'center'

           }}>Click "Sign in" to agree to Medium's
                       <Link sx={{color: 'GrayText'}}>Terms of Service</Link>
                       and acknowledge that <br/>
                       Medium's 
                       <Link sx={{color: 'GrayText'}}>Privacy Policy</Link>
                       applies to you             
           </Typography>
      </Box>
  )
}
export default Login;