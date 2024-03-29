import * as React from 'react';
import './GlobalNav.css';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import ReorderIcon from '@mui/icons-material/Reorder';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore'; 
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
       <List>
        {[
          { text: 'Close', icon: <CloseIcon  fontSize="medium"  /> },
          { text: 'Home', icon: <HomeIcon  fontSize="medium"  /> },
          { text: 'Explore', icon: <ExploreIcon /> },
          { text: 'Subscriptions', icon: <BookmarkIcon /> }, // Example icon
          { text: 'Settings', icon: <SettingsApplicationsIcon /> },
        ].map((item, index) => (
         
          <ListItem className='parent' key={item.text} disablePadding>
              <NavLink to={  item.text==='Close' ? '/Home':  `/${item.text}`} style={{textDecoration:'none',}}>
            <ListItemButton style={{textDecoration:'none',}}>
          
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>

              <ListItemText style={{textDecoration:'none',color:"black"}} primary={item.text} />
             
            </ListItemButton>
            </NavLink>
     

          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
  {open ===true ? <Button onClick={toggleDrawer(true)}><ReorderIcon fontSize='large' sx={{color:"black"}}/></Button>  :<Button onClick={toggleDrawer(true)}><ReorderIcon fontSize='large' sx={{color:"black"}}/></Button> }  
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}