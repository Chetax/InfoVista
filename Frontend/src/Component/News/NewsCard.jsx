import { Box, Container, Grid, Typography } from "@mui/material";

function NewsCard(newsobj) {
    const publishedAtString = "2024-04-11T16:00:00Z";
    const publishedAtDate = new Date(publishedAtString);
    const year = publishedAtDate.getFullYear();
    const month = publishedAtDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month (0-11)
    const day = publishedAtDate.getDate();
    const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    console.log("New obje -> ",newsobj);
    
    return (
        <>
            <Container sx={{pr:2}}>
                <hr />
                <Grid container sx={{pt:2,pb:2}}>
                    <Grid item xs={6} sx={{pl:2,pt:2,}}>
                    <a href={newsobj.news.url} style={{textDecoration:'none'}} target="blank"> 
                     <Typography variant="h5" sx={{fontWeight:"bold", color:'black',fontFamily:"Georgia",'&:hover':{color:"grey",cursor:'pointer'}}}>{newsobj.news.title}</Typography>
                     </a>
                        <Typography variant="subtitle1" sx={{fontFamily:"Garamond",fontSize:"20px",mt:1,lineHeight:"20px"}}>{newsobj.news.description}</Typography>
                            </Grid>
                    <Grid xs={1}></Grid>
                    <Grid item xs={5} > 

                    <img style={{ height: "235px",width:"100%", borderRadius: "5px"}} src={newsobj.news.image} alt="" /> 
          <Box sx={{display:"flex"}}><a href={newsobj.news.url} style={{textDecoration:'none'}} target="blank"> <Typography sx={{color:"skyblue",mr:2}}>{newsobj.news.source.name}</Typography></a> <Typography sx={{color:'grey'}}>• Published {formattedDate}</Typography></Box>
                      </Grid>
                </Grid>
                <hr />
            </Container>
        </>
    );
}

export default NewsCard;
