import { Grid, InputAdornment, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .required('Email is required'),
});


const Answer = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //console.log(values.email);
            const token = localStorage.getItem("token")
            const id = localStorage.getItem("id")
            const formData = new FormData();
            formData.append("answer", values.email);
            fetch(`http://womenhackathon.pythonanywhere.com/quora/addcomment/${id}/`, {
                method: "POST",
                body: formData,
                headers: { "Authorization": `Bearer ${token}` },
            })
                .then((result) => {
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
            <Grid container spacing={2} sx={{ width: "45vh" }}>
                <Grid item xs={12}>
                    <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
                        Add your answer
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Answer here"
                                        color='secondary'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        sx={{ width: "95%" }}
                                    />
                                </Grid>
                            </Grid>
                            <Button color="secondary" variant="contained" type="submit"
                                sx={{ width: "95%", marginTop: "1.2rem", fontSize: "1.1rem" }}>
                                Submit
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Answer