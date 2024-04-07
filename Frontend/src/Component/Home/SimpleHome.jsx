import { Box, Typography } from "@mui/material";
import NewsList from './NewsList';
function SimpleHome() {
    return ( <>
 <Box sx={{ pt:5}}>
<Typography variant="h5" fontWeight={'bold'}>Explore Channels</Typography>
<NewsList/>
 </Box>
    </> );
}

export default SimpleHome;