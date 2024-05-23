import { Box, Container, Grid, Typography } from "@mui/material";

function NewsCard(newsobj) {
    const publishedAtString = "2024-04-11T16:00:00Z";
    const publishedAtDate = new Date(publishedAtString);
    const year = publishedAtDate.getFullYear();
    const month = publishedAtDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month (0-11)
    const day = publishedAtDate.getDate();
    const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
  
    
    return (
        <>
            <Container>
                <hr />
                <Grid container sx={{pt:2,pb:2}}>
                    <Grid item xs={12} lg={6} md={6}  xl={6}   sx={{pt:2,}}>
                    <a href={newsobj.news.link} style={{textDecoration:'none'}} target="_blank"> 
    <Typography variant="h5" sx={{fontWeight:"bold", color:'black', fontFamily:"Arial", '&:hover': {color:"grey", cursor:'pointer'}}}>
        {newsobj.news.title}
    </Typography>
</a>

                        <Typography variant="subtitle1" sx={{fontFamily:"Georgia",fontSize:"18px",mt:1,lineHeight:"20px"}}>{newsobj.news.excerpt}</Typography>
                            </Grid>
                    <Grid xs={1} ></Grid>

                    <Grid item  xs={12} lg={5} md={5}  xl={5}   > 

                    <img style={{ height: "200px",width:"95%", borderRadius: "5px"}} src={newsobj.news.media} alt="" /> 
          <Box sx={{display:"flex"}}><a href={newsobj.news.link} style={{textDecoration:'none'}} target="blank"> <Typography sx={{color:"skyblue",mr:2}}>{newsobj.news.author}</Typography></a> <Typography sx={{color:'grey'}}>• Published {formattedDate}</Typography></Box>
                      </Grid>
                </Grid>
                <hr />
            </Container>
        </>
    );
}

export default NewsCard;
