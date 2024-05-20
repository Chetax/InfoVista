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
    import axios from 'axios'; // Import axios

    function Home() {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
        const [Query, SetQuery] = useState("");
        const [data, setData] = useState([]);
        
        const handleSeach = () => {
            SetQuery("");
        }

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('/news/geteverything');
                    const responseData = response.data.articles;
                    setData(responseData);
                    console.log("data -> ", responseData); // Log responseData
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();

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
                                    .filter(article => article.title !== "[Removed]" && article.excerpt !== "-"&& article.media !==null  )
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
