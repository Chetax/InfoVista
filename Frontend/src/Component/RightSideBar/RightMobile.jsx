import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ReorderIcon from '@mui/icons-material/Reorder';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SpaIcon from '@mui/icons-material/Spa';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import DevicesIcon from '@mui/icons-material/Devices';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch } from 'react-redux'
import { setKeyword } from '../../Redux/Keyword';
export default function AnchorTemporaryDrawer({keywords,query}) {
  let keyword = useSelector(state => state.keyword.keyword);
  const dispatch = useDispatch()
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <CloseIcon/>
            </ListItemIcon>
            <ListItemText primary="Close" />
            
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
      <ListItemText sx={{display:'flex',alignItems:'center',justifyContent:'center',mb:2}} primary=" Categroy" />
        {[['Business',<AddBusinessIcon/>], ['Entertainment',<MovieFilterIcon/>], ['General',<SpaIcon/>], ['Health',<HealthAndSafetyIcon/>],['Science',<ScienceIcon/>],["Sports",<SportsCricketIcon/>],["Technology",<DevicesIcon/>]].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>{
              setKeyword(text[0]);
              keywords=text[0];
              query(text[0]);
              console.log(keywords);
            }}>
              <ListItemIcon>
              {text[1]}
              </ListItemIcon>
              <ListItemText primary={text[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const anchor = 'right'; 

  return (
    <div>
      <Button sx={{position:"absolute",left:"90%"}} onClick={toggleDrawer(anchor, true)}>
      <ReorderIcon fontSize='large' sx={{color:"black"}}/>
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}
