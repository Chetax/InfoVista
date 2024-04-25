import { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import LeftNav from '../LeftNav/LeftNav';
import RightSideBar from '../RightSideBar/RightSideBar';
import RightMobile from '../RightSideBar/RightMobile';
import MobileLeftNav from '../LeftNav/MobileLeftNev';
import { useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NewsCard from '../News/NewsCard';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import axios from 'axios'; // Import axios

function Home() {
    const NavElement = ["Explore", "Subscriptions", "Settings"];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [Query, SetQuery] = useState("");
    const [data, setData] = useState([]);
    let location = useLocation().pathname;
    const handleSeach = () => (
        SetQuery("")
    )
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/news/getevrything');
                const responseData = response.data;
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

    const obj = {
        author: "Will Knight",
        content: "Forget artificial intelligence breaking free of human control and taking over the world. A far more pressing concern is how todays generative AI tools will transform the labor market. Some experts en… [+3188 chars]",
        description: "Some businesses are replacing people with AI; others are augmenting their workforce or hiring new workers. The long-term impact on labor is murky.",
        publishedAt: "2024-04-11T16:00:00Z",
        name: "Wired",
        title: "No One Actually Knows How AI Will Affect Jobs",
        url: "https://www.wired.com/story/ai-impact-on-work-mary-daly-interview/",
        urlToImage: "https://media.wired.com/photos/66172445418c784409dd692a/191:100/w_1280,c_limit/Mary-Daly-Q&A-Business-2008847890.jpg",
    }
    console.log("data -> ", data);

    return (
        <>
            <Grid container >
                <Grid item xs={windowWidth > 1000 ? 2 : 1}>{windowWidth > 1000 ? <LeftNav /> : <MobileLeftNav />}</Grid>
                <Grid item xs={windowWidth > 1000 ? 8 : 10} sx={{ pl: 5, pr: 5, '@media(max-width:948)': { pl: 2, pr: 2 } }} >
                    <Box >
                        <Container sx={{ display: 'flex', justifyContent: 'flex-end', pb: 1, pt: 1, mr: 4 }}>
                            <Box sx={{ border: "2px solid grey", width: '50%', display: "flex", alignItems: 'center', borderRadius: '5px' }}>
                                <InputBase
                                    placeholder="Enter The Keyword To Search"
                                    style={{ flexGrow: 1, paddingLeft: '10px' }}
                                    value={Query}
                                    onChange={(event) => { SetQuery(event.target.value) }}
                                />
                                {console.log(Query)}
                                <IconButton sx={{ color: 'grey' }} onClick={handleSeach}>
                                    <SearchIcon />
                                </IconButton>
                            </Box>
                        </Container>
                        {data &&
    data
        .filter(article => article.title !== "[Removed]" && article.description !== "-")
        .map(article => (
            article.url && article.title && article.image && <NewsCard key={article.title} news={article} />
        ))
}


                    </Box>
                </Grid>
                <Grid item xs={1}>{windowWidth > 1000 ? <RightSideBar /> : <RightMobile />}</Grid>
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
