import {  Box, Typography} from "@mui/material";
import NotFoundimg from './404-status-code-removebg-preview.png';
function NotFound() {
    return ( <>
   <Box sx={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
     <img src={NotFoundimg}></img>
   </Box>
    </> );
}

export default NotFound;