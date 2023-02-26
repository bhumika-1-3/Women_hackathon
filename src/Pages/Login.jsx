import { Grid, InputAdornment, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import image from '../Images/login.png'
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});


const Login = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            const token = localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjUxNTkyLCJpYXQiOjE2NzczOTIzOTIsImp0aSI6IjE0NGZjZmEzMzgyYTRhNWFhMjQwNGY2YTUxZDJmODU4IiwidXNlcl9pZCI6N30.Yt2Vt_rNa27R0_00eMjlwlBVe0za35JcM9VH0eFFZqE")
            const formData = new FormData();
            formData.append("email", values.email);
            formData.append("password", values.password);
            fetch("http://womenhackathon.pythonanywhere.com/account/login/", {
                method: "POST",
                body: formData,
            })
                .then((result) => {
                    console.log(result)
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Logged In',
                        showConfirmButton: false,
                        timer: 3000
                    })
                    navigate("/homepage");
                })
                .catch(() => {
                    alert('Error in the Code');
                });
        },
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <img src={image} style={{ width: "100%", height: "100%", margin: "1rem" }} />
                </Grid>
                <Grid item xs={12} md={5} style={{ marginBottom: "8rem", }}>
                    <div style={{ fontSize: "1.5rem" }} className="top-marg">
                        Login
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        color='secondary'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        name="password"
                                        label="Password"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        color='secondary'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
                            </Grid>
                            <Button color="secondary" variant="contained" type="submit"
                                sx={{ width: "90%", marginTop: "1.2rem", fontSize: "1.1rem" }}>
                                Submit
                            </Button>
                            <div style={{ marginTop: "1.1rem", fontSize: "1.1rem" }}>
                                New User ?
                                <Link to="/signup" style={{ textDecoration: "none", color: "green" }}> Register Now</Link>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login