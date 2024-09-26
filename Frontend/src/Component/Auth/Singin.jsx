import { Container, Box, Grid, Typography, TextField, Button } from "@mui/material";
import { useFirebase } from "../../Context/FirebaseContext";
import singup from './Images/singup.png';
import './Singin.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const value = await firebase.singinuser(email, password, firebase.setUserValue);
      setEmail(""); // Clear email field
      setPassword(""); // Clear password field
      if (value === true) {
        navigate('/Home'); // Navigate to home page if successful
      } else {
        navigate('/signin'); // Navigate back to sign-in if not successful
      }
    } catch (error) {
      alert(error.message || "Something went wrong"); // Provide meaningful feedback
    }
  };

  return (
    <Container sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Grid container sx={{ p: 6, bgcolor: "whitesmoke", borderRadius: "7px", width: "100%" }}>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
          <img className="imagesignup" src={singup} alt="Sign up visual" style={{ maxWidth: "100%", height: "auto" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
     
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pl: 2, mb: 7, '@media(max-width:940px) and (min-width:880px)': { pl: 5 } }}>
              <Typography fontSize={"20px"}>Email</Typography>
              <TextField
                id="outlined-basic"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: '70%' }}
                type="email"
                label="Email"
                variant="outlined"
                required
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pl: 2, mb: 7, '@media(max-width:940px) and (min-width:880px)': { pl: 5 } }}>
              <Typography fontSize={"20px"}>Password</Typography>
              <TextField
  id="outlined-password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Enter Your Password"
  sx={{ width: '70%' }}
  type="password"
  label="Password"
  variant="outlined"
  required
  autoComplete="current-password"
/>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Button type="submit" variant="contained" sx={{ textAlign: "center", width: "30%" }}>
                Sign In
              </Button>
            </Box>
          </form>
          {/* Form End */}

          <Box sx={{ textAlign: "center", display: "flex", justifyContent: 'start', alignItems: 'center' }}>
            <Typography>Don't have an account?</Typography>
            <Link to="/signup">
              <Button>Register Now</Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Signin;
