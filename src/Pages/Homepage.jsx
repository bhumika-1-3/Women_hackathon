import { Box, Grid } from '@mui/material'
import React from 'react'
import Faq from 'react-faq-component';
import d1 from "../Images/Doctors/d1.png"
import d2 from "../Images/Doctors/d2.png"
import d3 from "../Images/Doctors/d5.png"
import d4 from "../Images/Doctors/d4.png"
import Carousel from "react-multi-carousel";
import wallpaper1 from "../Images/wallpaper1.webp";
import wallpaper2 from "../Images/wallpaper2.webp";
import wallpaper3 from "../Images/wallpaper3.webp";
import wallpaper4 from "../Images/wallpaper4.webp";
import CustomizedAccordions from '../Components/Faq';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Homepage = () => {
  return (
    <Box>
      <Grid container spacing={2} style={{ fontFamily: 'Fondamento' }}>
        <Grid item xs={12}>
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            infinite={true}
            transitionDuration={500}
            autoPlaySpeed={5000}
            autoPlay={true}
            arrows={false}
          >
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7} sm={12}
                  style={{
                    height: "60vh", width: "100vh", backgroundImage: `url(${wallpaper1})`, backgroundPositionX: "50%",
                    backgroundSize: 'contain', borderRadius: "1vh", backgroundRepeat: "no-repeat", backgroundColor: "#f7edf7"
                  }}>
                </Grid>
                <Grid item xs={12} md={5} sm={12} style={{ marginTop: "5rem" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} style={{ fontSize: "3rem" }}>
                      RED RHYTHM
                    </Grid>
                    <Grid item xs={12} style={{ fontSize: "1.5rem", padding: "3rem 2rem",fontFamily:"Roboto" }}>
                      HealthyWomen(HW) is the nation's leading not-for-profit, independent health & wellness information source for women. The resource gives women the latest health information, including news updates, health tips, resources and extensive coverage of hundreds of health topics.
                      Also in Health Education Websites
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7} sm={12}
                  style={{
                    height: "60vh", width: "100vh", backgroundImage: `url(${wallpaper2})`, backgroundPositionX: "50%",
                    backgroundSize: 'contain', borderRadius: "1vh", backgroundRepeat: "no-repeat", backgroundColor: "#ffe7b4"
                  }}>
                </Grid>
                <Grid item xs={12} md={5} sm={12} style={{ marginTop: "5rem" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} style={{ fontSize: "3rem" }}>
                      RED RHYTHM
                    </Grid>
                    <Grid item xs={12} style={{ fontSize: "1.5rem", padding: "3rem 2rem", fontFamily:"Roboto" }}>
                      The National Women's Health Network improves the health of all women by developing and promoting a critical analysis of
                      health issues in order to affect policy and support consumer decision-making. The Network aspires to a health care system that is guided by social justice and reflects the needs of diverse women.
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7} sm={12}
                  style={{
                    height: "60vh", width: "100vh", backgroundImage: `url(${wallpaper3})`, backgroundPositionX: "50%",
                    backgroundSize: 'contain', borderRadius: "1vh", backgroundRepeat: "no-repeat", backgroundColor: "#f3af9d"
                  }}>
                </Grid>
                <Grid item xs={12} md={5} sm={12} style={{ marginTop: "5rem" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} style={{ fontSize: "3rem" }}>
                      RED RHYTHM
                    </Grid>
                    <Grid item xs={12} style={{ fontSize: "1.5rem", padding: "3rem 2rem",fontFamily:"Roboto" }}>
                      Healthista is dedicated to your health and wellbeing for women. Our network of journalists, editors, bloggers,
                      experts and producers bring you health news, features, blogs and videos that make it easier for you to look and feel better.
                      Get useful, practical advice to make you look and feel better.
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7} sm={12}
                  style={{
                    height: "60vh", width: "100vh", backgroundImage: `url(${wallpaper4})`, backgroundPositionX: "50%",
                    backgroundSize: 'contain', borderRadius: "1vh", backgroundRepeat: "no-repeat", backgroundColor: "#ffffff"
                  }}>
                </Grid>
                <Grid item xs={12} md={5} sm={12} style={{ marginTop: "5rem" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} style={{ fontSize: "3rem" }}>
                      RED RHYTHM
                    </Grid>
                    <Grid item xs={12} style={{ fontSize: "1.5rem", padding: "3rem 2rem",fontFamily:"Roboto" }}>
                      SheKnows helps empower women through articles and discussion related to parenting, women's health,
                      family-friendly recipes & relationship advice.
                      Follow to get great health information on women's health, nutrition, sleep, aging, stress, and more.
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Carousel>
        </Grid>
        <Grid item xs={12} style={{ fontSize: "2.5rem" }}>
          We extend our support in all fields
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} sm={6}>
              <Grid container spacing={2} style={{ padding: "2rem" }}>
                <Grid item xs={12}>
                  <div><img src={d1} style={{ width: "100%", height: "32vh", borderRadius: "1.5vh" }} /></div>
                  <div style={{ fontSize: "2rem", color: "#74aaf3" }}>Mental Health Support</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
              <Grid container spacing={2} style={{ padding: "2rem" }}>
                <Grid item xs={12}>
                  <div><img src={d2} style={{ width: "100%", height: "32vh", borderRadius: "1.5vh" }} /></div>
                  <div style={{ fontSize: "2rem", color: "#b7de2b" }}>Community Networking</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
              <Grid container spacing={2} style={{ padding: "2rem" }}>
                <Grid item xs={12}>
                  <div><img src={d3} style={{ width: "100%", height: "32vh", borderRadius: "1.5vh" }} /></div>
                  <div style={{ fontSize: "2rem", color: "#7ebfee" }}>PCOS Diagnosis</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
              <Grid container spacing={2} style={{ padding: "2rem" }}>
                <Grid item xs={12}>
                  <div><img src={d4} style={{ width: "100%", height: "32vh", borderRadius: "1.5vh" }} /></div>
                  <div style={{ fontSize: "2rem", color: "#feb849" }}>Period Tracker</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ fontSize: "2.5rem" }}>
          Few Do's and Don'ts
        </Grid>
        <Grid item xs={12} style={{ padding: "2rem 5rem" }}>
          <CustomizedAccordions />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Homepage
