import { Box, Button, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttractionsSharpIcon from '@mui/icons-material/AttractionsSharp';
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';
import StackedLineChartSharpIcon from '@mui/icons-material/StackedLineChartSharp';
import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {
   
    const isActive = (path) => window.location.pathname === path;

    return (
        <Box className="navbar-container" sx={{ pl: '55px', pr: "55px", pt: "10px", pb: "25px", display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography>New2Days</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}><AccountCircleIcon />Chetax!</Box>
            </Box>
            <Box className="FirstBox" sx={{ display: "flex",justifyContent: 'center', '& > *': { pl: 5, pr: 2 },'@media screen and (max-width: 700px) and (min-width: 600px)': {pl: 5,pr:3 },'@media screen and (max-width: 600px) and (min-width: 500px)': {pl:15,pr:4 }}}>     
            <NavLink to='/Profile'><Button variant="text" sx={{ fontSize: "12px", color: isActive('/Profile') ? 'aqua' : 'grey' }}><PersonIcon />Profile</Button></NavLink>
                <NavLink to='/CreatNew'><Button variant="text" sx={{ fontSize: "12px", color: isActive('/CreatNew') ? 'aqua' : 'grey' }}><AttractionsSharpIcon />CreatNew</Button></NavLink>
                <NavLink to='/ManageNews'><Button variant="text" sx={{ fontSize: "12px", color: isActive('/ManageNews') ? 'aqua' : 'grey' }}><EmojiEventsSharpIcon />ManageNews</Button></NavLink>
                <NavLink to='/Performance'><Button variant="text" sx={{ fontSize: "12px", color: isActive('/Performance') ? 'aqua' : 'grey' }}><StackedLineChartSharpIcon />Performance</Button></NavLink>
            </Box>
        </Box>
    );
}
export default Navbar;
