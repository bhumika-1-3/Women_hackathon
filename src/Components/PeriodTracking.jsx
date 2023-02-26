import { Grid, InputAdornment, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import image from '../Images/login.png'
const validationSchema = yup.object({
    start: yup
        .string('Enter your start date')
        .required('Start Date is required'),
    end: yup
        .string('Enter your end date')
        .required('End date is required'),
    flow: yup
        .string(`Enter your flow type`)
        .required('Please specify your flow type'),
    symptoms: yup
        .string(`Enter your Symptoms if any`)
        .required('Please specify your symptoms if any'),
});


const PeriodTracking = () => {
    const formik = useFormik({
        initialValues: {
            start: '',
            end: '',
            flow: '',
            symptoms:'',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ marginBottom: "2rem", textAlign: "center" }}>
                    <div style={{ fontSize: "1.5rem" }}>
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "-0.25rem" }}>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={6}>
                                    <div style={{ textAlign: "left", fontSize: "1.1rem" }}>Enter Start date</div>
                                    <TextField
                                        id="start"
                                        name="start"
                                        type="date"
                                        color='secondary'
                                        value={formik.values.start}
                                        onChange={formik.handleChange}
                                        error={formik.touched.start && Boolean(formik.errors.start)}
                                        helperText={formik.touched.start && formik.errors.start}
                                        sx={{ width: "100%" }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ textAlign: "left", fontSize: "1.1rem" }}>Enter End date</div>
                                    <TextField
                                        id="end"
                                        name="end"
                                        type="date"
                                        color='secondary'
                                        value={formik.values.end}
                                        onChange={formik.handleChange}
                                        error={formik.touched.end && Boolean(formik.errors.end)}
                                        helperText={formik.touched.end && formik.errors.end}
                                        sx={{ width: "98%" }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="flow"
                                        name="flow"
                                        label="Your Flow type - Heavy/light/medium"
                                        color='secondary'
                                        value={formik.values.flow}
                                        onChange={formik.handleChange}
                                        error={formik.touched.flow && Boolean(formik.errors.flow)}
                                        helperText={formik.touched.flow && formik.errors.flow}
                                        sx={{ width: "100%" }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="symptoms"
                                        name="symptoms"
                                        label="Enter Symptoms if any"
                                        color='secondary'
                                        value={formik.values.symptoms}
                                        onChange={formik.handleChange}
                                        error={formik.touched.symptoms && Boolean(formik.errors.symptoms)}
                                        helperText={formik.touched.symptoms && formik.errors.symptoms}
                                        sx={{ width: "98%" }}
                                    />
                                </Grid>
                            </Grid>
                            <Button color="secondary" variant="contained" type="submit"
                                sx={{ width: "99%", marginTop: "1.2rem", marginLeft: "-0.5rem", fontSize: "1.1rem" }}>
                                Submit
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default PeriodTracking