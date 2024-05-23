import { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import LeftNav from '../LeftNav/LeftNav';
import RightSideBar from '../RightSideBar/RightSideBar';
import RightMobile from '../RightSideBar/RightMobile';
import MobileLeftNav from '../LeftNav/MobileLeftNev';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NewsCard from '../News/NewsCard';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import axios from 'axios';

function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [Query, SetQuery] = useState("");
    const [data, setData] = useState([]);
    
    const handleSeach = () => {
        fetchData();
    }

    useEffect(() => {
        fetchData();

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const fetchData = async () => {
        try {
            const keyword =  'Bitcoin'; // Default to 'Bitcoin' if no keyword is provided
    
            var options = {
                method: 'GET',
                url: 'https://api.newscatcherapi.com/v2/search',
                params: {q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1'},
                headers: {
                  'x-api-key':  process.env.REACT_APP_newApi
                }
              };
              axios.request(options).then(function (response) {
                
                setData(response.data.articles)
            }).catch(function (error) {
                console.error(error);
            });
           
        } catch (error) {
            console.error("Error fetching data:", error);
            console.error("Response:", error.response); // Log detailed response
        }
    };
    

    return (
        <>
            <Grid container>
                <Grid item xs={windowWidth > 1000 ? 2 : 1}>
                    {windowWidth > 1000 ? <LeftNav /> : <MobileLeftNav />}
                </Grid>
                <Grid item xs={windowWidth > 1000 ? 8 : 10} sx={{ pl: 5, pr: 5, '@media(max-width:948)': { pl: 2, pr: 2 } }}>
                    <Box>
                        <Container sx={{ display: 'flex', justifyContent: 'flex-end', pb: 1, pt: 1, mr: 4 }}>
                            <Box sx={{ border: "2px solid grey", width: '50%', display: "flex", alignItems: 'center', borderRadius: '5px' }}>
                                <InputBase
                                    placeholder="Enter The Keyword To Search"
                                    style={{ flexGrow: 1, paddingLeft: '10px' }}
                                    value={Query}
                                    onChange={(event) => { SetQuery(event.target.value) }}
                                />
                                <IconButton sx={{ color: 'grey' }} onClick={handleSeach}>
                                    <SearchIcon />
                                </IconButton>
                            </Box>
                        </Container>
                        {data &&
                            data
                                .filter(article => article.title !== "[Removed]" && article.excerpt !== "-" && article.media !== null)
                                .map(article => (
                                    <NewsCard key={article.title} news={article} />
                                ))
                        }
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    {windowWidth > 1000 ? <RightSideBar /> : <RightMobile />}
                </Grid>
                <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                    <IconButton color="primary" aria-label="add">
                        <AddIcon sx={{ fontSize: "50px", color: "black" }} />
                    </IconButton>
                </div>
            </Grid>
        </>
    );
}

export default Home;
