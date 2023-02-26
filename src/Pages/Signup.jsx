import { Grid, InputAdornment, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import image from '../Images/signup.webp'

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    name: yup
        .string('Enter your Name')
        .required('Name is required'),
    height: yup
        .string('Enter your Height')
        .required('Height is required'),
    weight: yup
        .string('Enter your Weight')
        .required('Weight is required'),
    phone: yup.string()
        .required("Phone number is required")
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Enter a valid 10 digit Phone number"
        )
        .min(10, "Enter a valid 10 digit Phone number")
        .max(10, "Enter a valid 10 digit Phone number"),
});


const Signup = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            phone: '',
            name: '',
            height:'',
            weight:'',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
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
                <Grid item xs={12} md={5}>
                    <div style={{ fontSize: "1.5rem" }} className="top-marg-signup">
                        Signup
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label="Full Name"
                                        type="text"
                                        color='secondary'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
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
                                        id="phone"
                                        name="phone"
                                        label="Phone Number"
                                        type="text"
                                        color='secondary'
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="height"
                                        name="height"
                                        label="Your height"
                                        type="text"
                                        color='secondary'
                                        value={formik.values.height}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.height)}
                                        helperText={formik.touched.height && formik.errors.height}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="weight"
                                        name="weight"
                                        label="Your weight"
                                        type="text"
                                        color='secondary'
                                        value={formik.values.weight}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.weight)}
                                        helperText={formik.touched.weight && formik.errors.weight}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        name="password"
                                        label="Password"
                                        color='secondary'
                                        type={showPassword ? 'text' : 'password'}
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                        sx={{ width: "90%" }}
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
                                    />
                                </Grid>
                            </Grid>
                            <Button color="secondary" variant="contained" type="submit"
                                sx={{ width: "90%", marginTop: "1.2rem", fontSize: "1.1rem" }}>
                                Submit
                            </Button>
                            <div style={{ marginTop: "1.1rem", fontSize: "1.1rem" }}>
                                Already have an account ?
                                <Link to="/login" style={{ textDecoration: "none", color: "green" }}> Login </Link>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Signup