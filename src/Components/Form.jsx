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
    calories: yup
        .string('Enter your calories burnt')
        .required('Calories burnt is required'),
    water: yup
        .string('Enter your water intake')
        .required('Water intake is required'),
    mood: yup
        .string(`Enter your today's mood`)
        .required('Please specify your mood'),
});


const Form = () => {
    const formik = useFormik({
        initialValues: {
            calories: '',
            water:'',
            mood:'',
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
                        Tell us about your daily Activity
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="calories"
                                        name="calories"
                                        label="Daily Calories Burnt"
                                        color='secondary'
                                        value={formik.values.calories}
                                        onChange={formik.handleChange}
                                        error={formik.touched.calories && Boolean(formik.errors.calories)}
                                        helperText={formik.touched.calories && formik.errors.calories}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="water"
                                        name="water"
                                        label="Daily Water intake"
                                        color='secondary'
                                        value={formik.values.water}
                                        onChange={formik.handleChange}
                                        error={formik.touched.water && Boolean(formik.errors.water)}
                                        helperText={formik.touched.water && formik.errors.water}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="mood"
                                        name="mood"
                                        label="Your today's Mood"
                                        color='secondary'
                                        value={formik.values.mood}
                                        onChange={formik.handleChange}
                                        error={formik.touched.mood && Boolean(formik.errors.mood)}
                                        helperText={formik.touched.mood && formik.errors.mood}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
                            </Grid>
                            <Button color="secondary" variant="contained" type="submit"
                                sx={{ width: "90%", marginTop: "1.2rem", fontSize: "1.1rem" }}>
                                Submit
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Form