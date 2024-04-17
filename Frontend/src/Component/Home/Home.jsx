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
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
function Home() {
    const NavElement = ["Explore", "Subscriptions", "Settings"];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [data,setdata]=useState("");
    let location = useLocation().pathname; // Get the full pathname
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_newApi);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setdata(data); // Set the fetched data into state
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
    
        fetchData(); // Call the async function
    
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    console.log(data);

    return (
        <>
          
            <Grid container spacing={'none'} >
                <Grid item xs={2}>{windowWidth > 700 ? <LeftNav /> : <MobileLeftNav />}</Grid>
                <Grid item xs={10}>
                    {location === '/Home' ? <SimpleHome /> :
                        location === '/Explore' ? <Explore /> :
                            location === '/Subscription' ? <Subscription /> :
                                location === '/Setting' ? <Setting /> :
                                    <Notfound />
                    }
                    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                        <IconButton color="primary" aria-label="add">
                            <AddIcon sx={{fontSize:"50px",color:"black"}} />
                        </IconButton>
                    </div>
                    

                </Grid>
            </Grid>
        </>
    );
}

export default Home;
