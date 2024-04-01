import * as React from 'react';
import './GlobalNav.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Explore from '../Explore/Explore';
import SimpleHome from '../Home/SimpleHome';
import Notfound from '../NotFound/NotFound';
import Setting from '../Setting/Setting';
import Subscription from '../Subscription/Subscription';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore'; 
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './infovista-high-resolution-logo-black-transparent.png';
import { NavLink as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer(props) {



  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          { text: 'Home', icon: <HomeIcon  fontSize="medium"  /> },
          { text: 'Explore', icon: <ExploreIcon /> },
          { text: 'Subscription', icon: <BookmarkIcon /> }, // Example icon
          { text: 'Setting', icon: <SettingsApplicationsIcon /> },
        ].map((item, index) => (
         
          <ListItem className='parent' key={item.text} disablePadding>
              
              <ListItemButton component={RouterLink} to={`/${item.text}`} style={{textDecoration:'none'}}>
    <ListItemIcon>
        {item.icon}
    </ListItemIcon>
    <ListItemText style={{textDecoration:'none',color:"black"}} primary={item.text} />
</ListItemButton>
     
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItemButton component={RouterLink} to='/signin' style={{color:'black',textDecoration:'none'}}>
    <ListItemIcon>
        <LogoutIcon />
    </ListItemIcon>
    <ListItemText primary="Logout" />
</ListItemButton>


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',bgcolor:"" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer 
          variant="permanent"
          sx={{
            
            display: { xs: 'none', sm: 'block' },
            display:"flex",
            alignContent:'center',
            justifyContent:'center',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <Typography variant="h6" sx={{ ml: 2, mt: 2,display:'flex',justifyContent:"center",alignItems:"center" }}>
            <img className='img-fluid' style={{width:"70%"}} src={Logo} alt="InfoVista Logo" />
          </Typography>
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}

export default ResponsiveDrawer;
