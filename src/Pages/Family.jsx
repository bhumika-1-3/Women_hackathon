import {
    Grid, InputAdornment, TextField, Button, TableContainer,
    Table, TableBody, TableCell, Paper, TableHead, TableRow
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import image from '../Images/family.webp'
import axios from 'axios';

const validationSchema = yup.object({
    name: yup
        .string('Enter Member Name')
        .required('Name is required'),
    relation: yup
        .string('Enter Member Relation')
        .required('Relation is required'),
    phone: yup.string()
        .required("Phone number is required")
        .min(13, "Enter a valid 10 digit Phone number")
        .max(13, "Enter a valid 10 digit Phone number"),
});


const Family = () => {

    const [load, setLoad] = useState([]);
    useEffect(() => {
        loadList();
    }, []);

    const loadList = async () => {
        const token = localStorage.getItem("token")
        const result = await axios.get("http://womenhackathon.pythonanywhere.com/family/", {
            headers: { "Authorization": `Bearer ${token}` },
        });
        setLoad(result.data);

    };
    console.log(load);

    const formik = useFormik({
        initialValues: {
            name: '',
            relation: '',
            phone: '+91',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            const token = localStorage.getItem("token")
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("phone", values.phone);
            formData.append("relation", values.relation);
            fetch(`http://womenhackathon.pythonanywhere.com/family/`, {
                method: "POST",
                body: formData,
                headers: { "Authorization": `Bearer ${token}` },
            })
                .then((result) => {
                    console.log(result)
                })
                .catch(() => {
                    alert('Error in the Code');
                });
        },
    });


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <img src={image} style={{ width: "100%", height: "100%", margin: "1rem" }} />
                </Grid>
                <Grid item xs={12} md={5}>
                    <div style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
                        Enter Family Members
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label="Member Name"
                                        color='secondary'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
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
                                        id="relation"
                                        name="relation"
                                        label="Member Relation"
                                        color='secondary'
                                        value={formik.values.relation}
                                        onChange={formik.handleChange}
                                        error={formik.touched.relation && Boolean(formik.errors.relation)}
                                        helperText={formik.touched.relation && formik.errors.relation}
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
                    <div style={{ fontSize: "1.5rem", marginTop: "5rem", marginBottom: "2rem" }}>
                        List of Family Members
                    </div>
                    <div>
                        <TableContainer>
                            <Table sx={{ minWidth: 650, padding: "2rem", fontSize: "1.5rem" }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell align="center" sx={{ fontSize: "1.5rem" }}>Name</TableCell>
                                        <TableCell align="center" sx={{ fontSize: "1.5rem" }}>Phone Number</TableCell>
                                        <TableCell align="center" sx={{ fontSize: "1.5rem" }}>Relation</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {load.map((row) => (
                                        <TableRow
                                            key={row.user}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" sx={{ fontSize: "1.1rem" }}>{row.name}</TableCell>
                                            <TableCell align="center" sx={{ fontSize: "1.1rem" }}>{row.phone}</TableCell>
                                            <TableCell align="center" sx={{ fontSize: "1.1rem" }}>{row.relation}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Family