import { Grid, InputAdornment, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import image from '../Images/login.png'
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .required('Email is required'),
});


const Question = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values.email);
            const token = localStorage.getItem("token")
            const formData = new FormData();
            formData.append("question", values.email);
            fetch("http://womenhackathon.pythonanywhere.com/quora/addpost/", {
                method: "POST",
                body: formData,
                headers: { "Authorization": `Bearer ${token}` },
            })
                .then((result) => {
                    console.log(result)
                    console.log(result)
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank You !Your response was successfully added',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      navigate('/blog')
                })
                .catch(() => {
                    alert('Error in the Code');
                });
        },
    });


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ marginBottom: "8rem", }}>
                    <div style={{ fontSize: "1.5rem", margin: "2vh 0vh" }}>
                        Menstrual hygiene is vital to the empowerment and well-being of women and girls worldwide.
                        It is about more than just access to sanitary pads and appropriate toilets - though those are important.
                        It is also about ensuring women and girls live in an environment that values and supports their ability
                        to manage their menstruation with dignity.
                    </div>
                    <div style={{ fontSize: "2.5rem" }}>
                        Well | Eat | Move | Live | Mind | Family
                    </div>
                    <div style={{ fontSize: "1.5rem", margin: "2vh 0vh" }}>
                        Our programmes address all aspects of menstrual health and hygiene including policy and advocacy,
                        timely and accurate knowledge about menstruation, social norms around menstruation,
                        access to safe and affordable menstrual hygiene materials, and access to sanitation and washing facilities.
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Ask us any Question"
                                        color='secondary'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
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

export default Question