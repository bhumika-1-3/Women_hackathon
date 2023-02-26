import { Grid, InputAdornment, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import CountrySelect from './CountrySelect';
import StateSelect from './StateSelect';
import Speciality from './Speciality';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

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


const Search = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const top100Films = [
            { label: 'General Physician', year: 1994 },
            { label: 'Gynaecologist', year: 1972 },
            { label: 'Dermatologist', year: 1974 },
            { label: 'Ophthalmologist', year: 2008 },
            { label: 'Dentist', year: 1957 },
            { label: "Orthopedist", year: 1993 },
            { label: 'Breast Care Specialist', year: 1994 },
          ];

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ marginBottom: "3rem", marginLeft: "-1rem" }}>
                    <div style={{ fontSize: "1.5rem", marginBottom:"-1rem" }}>
                        Search
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={top100Films}
                                        sx={{ width: "93%", marginLeft: "5%" }}
                                        renderInput={(params) => <TextField {...params} label="Search" />}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                                        <SearchIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}><CountrySelect /></Grid>
                                <Grid item xs={12}><StateSelect /></Grid>
                                <Grid item xs={12}><Speciality /></Grid>
                            </Grid>
                            <Button color="secondary" variant="contained" type="submit"
                                sx={{ width: "93%", marginTop: "1.2rem", fontSize: "1.1rem", marginLeft:"4%" }}>
                                <Link to="/" style={{ textDecoration: "none", color: "white" }}>Submit</Link>
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}

export default Search