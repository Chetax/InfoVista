import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SpaIcon from '@mui/icons-material/Spa';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import DevicesIcon from '@mui/icons-material/Devices';
import AddIcon from '@mui/icons-material/Add';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';

const drawerWidth = 240;

export default function PermanentDrawerRight({ onKeywordChange }) {
  const categories = [
    ['Business', <AddBusinessIcon />],
    ['Entertainment', <MovieFilterIcon />],
    ['General', <SpaIcon />],
    ['Health', <HealthAndSafetyIcon />],
    ['Science', <ScienceIcon />],
    ['Sports', <SportsCricketIcon />],
    ['Technology', <DevicesIcon />]
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <List>
          <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, fontSize: 'medium' }}>
            Category
          </Typography>
          {categories.map((category, index) => (
            <ListItem key={category[0]} disablePadding>
              <ListItemButton onClick={() => onKeywordChange(category[0])}>
                {category[1]}
                <ListItemText sx={{ ml: 2 }} primary={category[0]} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'start', position: 'absolute', top: '90%', left: '5%' }}>
          <Button sx={{ borderRadius: '50%', color: 'black' }}><AddIcon sx={{ fontSize: 50 }} /></Button>
        </Box>
      </Drawer>
    </Box>
  );
}
