import { Box, Grid, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import image from '../Images/blog.webp'
import axios from 'axios'
import Question from '../Components/Addquestion'
import { Modal } from 'react-responsive-modal';
import Answer from '../Components/Addanswer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import blog from '../Images/blogpage.webp';
const Blog = () => {

  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((preVisible) => preVisible + 3);
  }

  const [load, setLoad] = useState([]);
  useEffect(() => {
    loadList();
    getid();
    likebutton();
    dislikebutton();
  }, []);

  const loadList = async () => {
    const token = localStorage.getItem("token")
    const result = await axios.get("http://womenhackathon.pythonanywhere.com/quora/", {
      headers: { "Authorization": `Bearer ${token}` },
    });
    setLoad(result.data);

  };
  console.log(load);

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const getid = async (id) => {
    localStorage.setItem("id", id);
  }

  const likebutton = async (e) => {
    const token = localStorage.getItem("token")
    const result = await axios.post(`http://womenhackathon.pythonanywhere.com/quora/ratepost/${e}/1/`, {
      headers: { "Authorization": `Bearer ${token}` },
    });
    console.log(e);
  }
  const dislikebutton = async (dis) => {
    const token = localStorage.getItem("token")
    const result = await axios.post(`http://womenhackathon.pythonanywhere.com/quora/ratepost/${dis}/0/`, {
      headers: { "Authorization": `Bearer ${token}` },
    });
  }

  return (
    <Box>
      <Grid container spacing={2} style={{fontFamily: 'Fondamento'}}>
        <Grid item xs={12} sx={{ fontSize: "2.5rem", marginTop: "2rem", }}>
          <div>Curated Health Articles</div>
        </Grid>
        <Grid item xs={12} sx={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
          <div>Discover the best doctors, clinic & hospital in the city nearest to you</div>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <img src={image} style={{ width: "90%" }} />
        </Grid>
        <Grid item xs={12} md={5} sm={12}>
          <Question />
        </Grid>
        <Grid item xs={12} style={{fontFamily: 'Charm'}}>
          <Grid container spacing={2} sx={{ paddingLeft: "1rem" }}>
            {load.slice(0, visible).map((item) => {
              return (
                <Grid item xs={12} md={4} sm={12} sx={{ height: "70vh" }}>
                  <Grid container spacing={2} sx={{ borderRadius: "2vh", padding: "1rem" }}>
                    <Grid item xs={12}
                      style={{
                        height: "35vh", backgroundImage: `url(${blog})`,backgroundPositionY: "40%",
                        backgroundSize: 'cover', borderRadius: "1vh"
                      }}>
                      <div style={{ textAlign: "right", paddingRight: "1.5rem" }}>
                        <Button color="secondary" variant='contained'
                          sx={{
                            fontSize: "1.3rem", fontWeight: "600", marginTop: "23vh", "&:hover": {
                              backgroundColor: '#E06196'
                            }
                          }}
                          onClick={() => { onOpenModal(); getid(item.id); }}>
                          Answer</Button>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1} sx={{ textAlign: "left"}}>
                        <Grid item xs={12}>
                          <div style={{ fontSize: "1.7rem", fontWeight: "600", marginBottom:"1rem" }}>{item.question}</div>
                        </Grid>
                        <Grid item xs={6} style={{padding:"0vh 2vh"}}>
                          <Grid container spacing={2} style={{backgroundColor:"pink", borderRadius:"2vh", height:"5vh", marginTop:"2vh"}}>
                            <Grid item xs={3}>
                              <ThumbUpOffAltIcon color="secondary" sx={{
                                width: "5vh", height: "5vh", marginTop:"-1.8vh", "&:hover": {
                                  color: '#E06196'
                                }
                              }}
                                onClick={(e) => likebutton(item.id)} /></Grid>
                            <Grid item xs={9} style={{ fontSize: "1.3rem", marginTop: "-0.5rem" }}>{item.like} likes</Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6} style={{padding:"0vh 2vh"}}>
                          <Grid container spacing={2} style={{backgroundColor:"pink", borderRadius:"2vh", height:"5vh", marginTop:"2vh"}}>
                            <Grid item xs={3}>
                              <ThumbDownOffAltIcon color="secondary" sx={{
                                width: "5vh", height: "5vh",marginTop:"-1.8vh", "&:hover": {
                                  color: '#E06196'
                                }
                              }}
                                onClick={(dis) => dislikebutton(item.id)} /></Grid>
                            <Grid item xs={9} style={{ fontSize: "1.3rem", marginTop: "-0.5rem" }}>{item.dislike} dislikes</Grid>
                          </Grid>
                        </Grid>
                        {item.comments.map((ans) => {
                          return (
                            <Grid item xs={12}>
                              <div style={{ fontSize: "1.3rem", marginBottom: "0.5rem", marginTop: "0.5rem" }}><ArrowForwardIosIcon color="secondary" />{ans.answer}</div>
                            </Grid>
                          )
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )
            })}
            <Grid item xs={12}>
              <Button onClick={showMore} variant="contained" color="secondary"
              style={{fontSize:"1.5rem"}}>Load More Blog Posts</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Modal open={open} onClose={onCloseModal} center>
        <Answer />
      </Modal>
    </Box>
  )
}

export default Blog
