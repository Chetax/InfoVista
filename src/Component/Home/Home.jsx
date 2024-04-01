import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import LeftNav from '../LeftNav/LeftNav';
import MobileLeftNav from '../LeftNav/MobileLeftNev';
import { useLocation } from 'react-router-dom'; 
import Notfound from '../NotFound/NotFound';
import Explore from '../Explore/Explore';
import Setting from '../Setting/Setting';
import Subscription from '../Subscription/Subscription';
import SimpleHome from './SimpleHome';

function Home() {

  
    const NavElement = ["Explore", "Subscriptions", "Settings"];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let location = useLocation();
    location=location.pathname;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Grid container spacing={'none'} >
                <Grid item xs={2}>{windowWidth > 700 ? <LeftNav /> : <MobileLeftNav />}</Grid>
                <Grid item xs={10}>
                {
        location ==='/Home' ? <SimpleHome></SimpleHome> :
        location ==='/Explore' ?<Explore/> : 
        location ==='/Subscription'?<Subscription/>:
        location ==='/Setting' ? <Setting/> :  
        <Notfound/> 
      }
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
