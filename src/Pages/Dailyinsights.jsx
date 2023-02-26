import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import Face3Icon from '@mui/icons-material/Face3';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import MailIcon from '@mui/icons-material/Mail';
import HeightIcon from '@mui/icons-material/Height';
import PhoneIcon from '@mui/icons-material/Phone';
import Chart from "react-apexcharts"
import Form from '../Components/Form';
import PeriodTracking from '../Components/PeriodTracking';
const Dailyinsights = () => {

  const [state, setState] = useState({
    options: {
      colors: ['#660F53', '#F5A4C5'],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "series-2",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ padding: "1rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={12} sx={{ marginTop: "2rem", paddingLeft: "2rem", textAlign: "left" }}>
              <Grid container spacing={2} >
                <Grid item xs={12}>
                  <div style={{ fontSize: "2.7rem", padding: "0rem 1rem" }}>Healthy Your Mind <br />Happy your Day</div>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ fontSize: "1.5rem", padding: "0rem 1rem" }}>
                    Healthy habits are the best way to avoid disease, prolong your life, and live more happily.
                    But in the chaos of a woman's daily life, healthy living may take back seat to chores, work,
                    busy schedules, and more. Take these simple steps toward a longer, healthier life.
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} sm={12} sx={{ marginTop: "2rem", paddingLeft: "2rem", textAlign: "left" }}>
              <Grid container spacing={2} >
                <Grid item xs={12} md={6} sm={12}>
                  <Grid container spacing={2} style={{ backgroundColor: "pink", borderRadius: "2vh",marginTop:"4rem" }}>
                    <Grid item xs={12} style={{ padding: "1rem", fontSize: "1.3rem" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <Face3Icon color="secondary" sx={{ width: "5vh", height: "5vh", marginRight: "3vh" }} />
                        </Grid>
                        <Grid item xs={10}>
                          <div style={{ marginTop: "0.5rem" }}>Prachi Patel</div>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ padding: "1rem", fontSize: "1.3rem" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <MailIcon color="secondary" sx={{ width: "5vh", height: "5vh", marginRight: "3vh" }} />
                        </Grid>
                        <Grid item xs={10}>
                          <div style={{ marginTop: "0.5rem" }}>prachidemo@gmail.com</div>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ padding: "1rem", fontSize: "1.3rem" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <PhoneIcon color="secondary" sx={{ width: "5vh", height: "5vh", marginRight: "3vh" }} />
                        </Grid>
                        <Grid item xs={10}>
                          <div style={{ marginTop: "0.5rem" }}>+91 9874561230</div>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} style={{ padding: "1rem", fontSize: "1.3rem" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={3}>
                          <MonitorWeightIcon color="secondary" sx={{ width: "5vh", height: "5vh", marginRight: "3vh" }} />
                        </Grid>
                        <Grid item xs={9}>
                          <div style={{ marginTop: "0.5rem" }}>50kg</div>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} style={{ padding: "1rem", fontSize: "1.3rem" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={3}>
                          <HeightIcon color="secondary" sx={{ width: "5vh", height: "5vh", marginRight: "3vh" }} />
                        </Grid>
                        <Grid item xs={9}>
                          <div style={{ marginTop: "0.5rem" }}>155cm</div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} sm={12}>
                  <Form/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={12} style={{ paddingLeft: "5vh" }}>
              <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="700"
              />
            </Grid>
            <Grid item xs={12} md={6} sm={12} sx={{ marginTop: "2rem", textAlign: "left" }}>
              <Grid container spacing={2} >
                <Grid item xs={12}>
                  <div style={{ fontSize: "2rem", paddingRight: "1rem" }}>Don't remember when you got your periods last time ?</div>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ fontSize: "1.5rem", paddingRight: "1rem" }}>
                    No worries we help you keep track of your periods
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <PeriodTracking/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dailyinsights
