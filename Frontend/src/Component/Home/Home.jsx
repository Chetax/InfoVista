import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import LeftNav from '../LeftNav/LeftNav';
import RightSideBar from '../RightSideBar/RightSideBar';
import RightMobile from '../RightSideBar/RightMobile'
import MobileLeftNav from '../LeftNav/MobileLeftNev';
import { useLocation } from 'react-router-dom'; 
import Notfound from '../NotFound/NotFound';
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
    
    console.log("data ->",data);

    return (
        <>
          
            <Grid container >
                <Grid item xs={2.5  }>{windowWidth > 948 ? <LeftNav /> : <MobileLeftNav />}</Grid>
                <Grid item xs={7} sx={{pl:5,pr:5}} >
  <Container sx={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
  <p style={{ margin: 0, padding: 0,  }}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam consequatur maiores non! Iste non facere nihil molestiae mollitia esse quis error cupiditate laborum odio, sapiente animi sint quidem eum explicabo? Totam, nobis sequi dignissimos voluptate velit quae facere provident fuga ullam! Quia minima iusto doloremque dolore tempora iure voluptate obcaecati nihil exercitationem pariatur amet, architecto labore id itaque voluptas quidem eligendi officiis non commodi suscipit sed at? Nostrum dignissimos non cum officia doloremque voluptatibus voluptas laboriosam totam incidunt culpa illum nulla blanditiis commodi ipsam odit, autem, sint facere quo nihil sapiente doloribus! Tempora odit, quis aliquid iusto magnam laborum excepturi?
  </p>  
</Container>
                </Grid>
                <Grid item xs={2}>{windowWidth > 948 ? <RightSideBar /> : <RightMobile />}</Grid>
                <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                        <IconButton color="primary" aria-label="add">
                            <AddIcon sx={{fontSize:"50px",color:"black"}} />
                        </IconButton>
                    </div>
            </Grid>
        </>
    );
}

export default Home;
