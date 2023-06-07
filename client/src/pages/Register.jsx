import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import {
  Box,
  Button,
  styled,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
 const [err, setError]=useState(null);
 const navigate =useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault()
    
    try {
     await axios.post("/auth/register", inputs);
     navigate("/login"); 
    } catch (err) {
      setError(err.response.data)
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
      padding={2}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "400",
          fontFamily: "gt-super",
          marginTop: "50px",
        }}
      >
        Join Medium.
      </Typography>
      <TextField
        variant="standard"
        onChange={handleChange}
        name="username"
        label="Enter Name"
        sx={{
          marginTop: "20px",
          marginLeft: "125px",
          width: "250px",
        }}
      />
      <br />
      <TextField
        variant="standard"
        onChange={handleChange}
        name="email"
        label="Enter Email"
        sx={{
          marginTop: "20px",
          marginLeft: "125px",
          width: "250px",
        }}
      />
      <br />

      <TextField
        variant="standard"
        onChange={handleChange}
        name="password"
        label="Enter password"
        sx={{
          marginTop: "20px",
          marginLeft: "125px",
          width: "250px",
        }}
      />
      <br />

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          marginTop: "25px",
          marginLeft: "125px",
          width: "250px",
        }}
      >
        SignUp
      </Button>
      <br />
      <Typography
        sx={{
          marginTop: "20px",
          marginLeft: "235px",
        }}
      >
        OR
      </Typography>
      {err && <p>User Already Exists</p>}
      <Button
        href="/Login"
        sx={{
          marginTop: "20px",
          marginLeft: "125px",
          width: "250px",
          background: "#558b2f",
          color: "white",
          "&:hover": { background: "green" },
        }}
      >
        Already have an account
      </Button>

      <Typography
        sx={{
          fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "small",
          marginTop: "40px",
          color: "GrayText",
          textAlign: "center",
        }}
      >
        Click "Sign in" to agree to Medium's
        <Link sx={{ color: "GrayText" }}>Terms of Service</Link>
        and acknowledge that <br />
        Medium's
        <Link sx={{ color: "GrayText" }}>Privacy Policy</Link>
        applies to you
      </Typography>
    </Box>
  );
};
export default Register;
