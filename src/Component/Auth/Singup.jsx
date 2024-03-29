
import {useFirebase} from  '../../Context/FirebaseContext';
import { Container, Box, Grid, Typography, TextField, Button } from "@mui/material";
import singin from './singupbg1 (1).png';
import { Link } from "react-router-dom";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
function Singup() {
    const firebase=useFirebase();
    console.log('firebase',firebase);
    const [email,Setemail]=useState('');
    const [name,Setname]=useState('');
    const [password,Setpassword]=useState('');
    const navigate=useNavigate();


    return ( <>
        <Container sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container sx={{ p: 6, bgcolor: "whitesmoke", borderRadius: "7px", width: "100%" }}>
                    <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <img className="imagesignup" src={singin} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pl: 2, mb: 7, '@media(max-width:940px) and (min-width:880px)': { pl: 5 } }}>
                            <Typography fontSize={"20px"}>Name</Typography>
                            <TextField id="outlined-basic" placeholder="Enter Your name "  value={name} onChange={(e)=>Setname(e.target.value)} sx={{ width: '70%' }} type="text" label="Name" variant="outlined" />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pl: 2, mb: 7, '@media(max-width:940px) and (min-width:880px)': { pl: 5 } }}>
                            <Typography fontSize={"20px"}>Email</Typography>
                            <TextField id="outlined-basic" placeholder="Enter Your Email "  value={email} onChange={(e)=>Setemail(e.target.value)} sx={{ width: '70%' }} type="email" label="Email" variant="outlined" />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pl: 2, mb: 7, '@media(max-width:940px) and (min-width:880px)': { pl: 5 } }}>
                            <Typography fontSize={"20px"}   sx={{}}>Password</Typography>
                            <TextField id="outlined-basic" value={password} onChange={(e)=>Setpassword(e.target.value)} placeholder="Enter Your Password " sx={{ width: '70%' }} type="password" label="Password" variant="outlined" />
                        </Box>
                        <Button onClick={async () => { try{
                         const value= await firebase.signupUser(name,email, password,firebase.setUserValue);Setemail("");Setpassword("");Setname("");if(value)navigate('/Home');
                        else navigate('/signup');}catch(error){
                            alert(error);navigate('/signup')
                           }}} variant="contained" sx={{ textAlign: "center", width: "30%" }}>Register</Button>

                        <Box sx={{ textAlign: "center",display:"flex",justifyContent:'start' ,alignItems:'center' }}>
                            <Typography>Already have an account ? </Typography><Link to="/singin"> <Button>Sign In</Button></Link>
                        </Box>
                        
                  
                    </Grid>
                </Grid>
            </Container>
    </> );
}

export default Singup;