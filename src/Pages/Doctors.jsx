import { Grid, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Search from '../Components/Search'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Person3Icon from '@mui/icons-material/Person3';
import SmsIcon from '@mui/icons-material/Sms';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import doc1 from "../Images/Doctors/1.webp";
import doc2 from "../Images/Doctors/2.webp";
import doc3 from "../Images/Doctors/3.webp";
import doc4 from "../Images/Doctors/4.webp";
import doc5 from "../Images/Doctors/6.png";
const Doctors = () => {
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((preVisible) => preVisible + 3);
  }

  const upcoming = [
    { name: "Elyssa Perry", type: "job type", company: "Gynecologist", address: "address", email: "dsfhsgj@gmail.com", phone: "98745162309", image: doc1 },
    { name: "Melody Vincet", type: "job type", company: "Dermatologist", address: "address", email: "dsfhsgj@gmail.com", phone: "98745162309", image: doc2 },
    { name: "Roselyn Fritz", type: "job type", company: "Dentist", address: "address", email: "dsfhsgj@gmail.com", phone: "98745162309", image: doc3 },
    { name: "Haylie Barrett", type: "job type", company: "General Physician", address: "address", email: "dsfhsgj@gmail.com", phone: "98745162309", image: doc4 },
    { name: "Saige Ross", type: "job type", company: "Breast Care Specialist", address: "address", email: "dsfhsgj@gmail.com", phone: "98745162309", image: doc5 },
    { name: "Ainne Rivea", type: "job type", company: "Gynecologist", address: "address", email: "dsfhsgj@gmail.com", phone: "98745162309", image: doc1 },
    { name: "Carlie Hoover", type: "job type", company: "Dermatologist", address: "address", email: "dsfhsgj@gmail.com", phone: "98745162309", image: doc2 },
    { name: "Giannay Rosaria", type: "job type", company: "Gynecologist", address: "address", email: "dsfhsgj@gmail.com", phone: "98745162309", image: doc3 },
    { name: "Gloria Gilmore", type: "job type", company: "Breast Care Specialist", address: "address", email: "dsfhsgj@gmail.com", phone: "98745162309", image: doc4 },
    { name: "Michelle Mendoza", type: "job type", company: "General Physician", address: "address", email: "dsfhsgj@gmail.com", phone: "98745162309", image: doc5 }
  ];

  return (
    <Box>
      <Grid container spacing={2} padding={2} style={{fontFamily: 'Fondamento'}}>
        <Grid item xs={12} sx={{ fontSize: "2.5rem", marginTop: "2rem", }}>
          <div>Search Doctor, Make an Appointment</div>
        </Grid>
        <Grid item xs={12} sx={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
          <div>Discover the best doctors, clinic & hospital in the city nearest to you</div>
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <Search />
        </Grid>
        <Grid item xs={12} md={8} sm={12}>
          <Grid container spacing={2} sx={{ paddingLeft: "1rem", fontFamily: 'Roboto' }}>
            {upcoming.slice(0, visible).map((item) => {
              return (
                <Grid item xs={12} md={4} sm={6} style={{border:"1px solid pink", borderRadius:"2rem"}}>
                  <Grid container spacing={2} sx={{ borderRadius: "2vh", padding: "1rem" }}>
                    <Grid item xs={12} style={{
                      height: "40vh", backgroundImage: `url(${item.image})`, backgroundPositionX: "50%",
                      backgroundSize: 'cover', borderRadius: "1vh"
                    }}>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1} sx={{ textAlign: "left" }}>
                        <Grid item xs={12}>
                          <div style={{ fontSize: "2rem", fontWeight: "700" }}>{item.name}</div>
                        </Grid>
                        <Grid item xs={12}>
                          <div style={{ fontSize: "1.3rem" }}>{item.company}</div>
                        </Grid>
                        <Grid item xs={12}>
                          <div style={{ fontSize: "1.3rem", marginTop: "-0.4rem" }}>{item.email}</div>
                        </Grid>
                        <Grid item xs={12}>
                          <div style={{ fontSize: "1.3rem", marginTop: "-0.4rem" }}>+91 {item.phone}</div>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container spacing={2} style={{ marginTop: "0.75rem" }}>
                            <Grid item xs={3}><CalendarMonthIcon color="secondary" style={{ width: "35px", height: "35px" }} /></Grid>
                            <Grid item xs={3}><Person3Icon color="secondary" style={{ width: "35px", height: "35px" }} /></Grid>
                            <Grid item xs={3}><SmsIcon color="secondary" style={{ width: "35px", height: "35px" }} /></Grid>
                            <Grid item xs={3}><LocalHospitalIcon color="secondary" style={{ width: "35px", height: "35px" }} /></Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )
            })}
            <Grid item xs={12}>
              <Button onClick={showMore} variant="contained" color="secondary"
                style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Load More Doctor Details</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Doctors
