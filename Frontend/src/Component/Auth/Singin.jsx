import { Container, Box, Grid, Typography, TextField, Button } from "@mui/material";
import { useFirebase } from "../../Context/FirebaseContext";
import singup from './Images/singup.png';
import './Singin.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Singin() {
    const firebase=useFirebase();
    const [email ,Setemail]=useState('');
    const [password ,Setpassword]=useState('');
    const navigate=useNavigate();
    return (
        <>
            <Container sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container sx={{ p: 6, bgcolor: "whitesmoke", borderRadius: "7px", width: "100%" }}>
                    <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <img className="imagesignup" src={singup} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pl: 2, mb: 7, '@media(max-width:940px) and (min-width:880px)': { pl: 5 } }}>
                            <Typography fontSize={"20px"}>Email</Typography>
                            <TextField id="outlined-basic" placeholder="Enter Your Email "  value={email} onChange={(e)=>Setemail(e.target.value)} sx={{ width: '70%' }} type="email" label="Email" variant="outlined" />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pl: 2, mb: 7, '@media(max-width:940px) and (min-width:880px)': { pl: 5 } }}>
                            <Typography fontSize={"20px"}   sx={{}}>Password</Typography>
                            <TextField id="outlined" value={password} onChange={(e)=>Setpassword(e.target.value)} placeholder="Enter Your Password " sx={{ width: '70%' }} type="password" label="Password" variant="outlined" />
                        </Box>
                        <Button onClick={async () => {  try{ const value= await firebase.singinuser(email,password,firebase.setUserValue);Setemail("");Setpassword("");if(value===true)navigate('/Home');else navigate('/signin');}catch(error){alert(error);}}} variant="contained" sx={{ textAlign: "center", width: "30%" }}>Sign In</Button>

                        <Box sx={{ textAlign: "center",display:"flex",justifyContent:'start' ,alignItems:'center' }}>
                            <Typography>Don't have an account ? </Typography><Link to="/signup"> <Button>Register Now</Button></Link>
                        </Box>
                        {/* pass: Chetan12 , mail:testz@gmail.com*/}
                  
                    </Grid>
                </Grid>
            </Container>
        
        </>
    );
}

export default Singin;
