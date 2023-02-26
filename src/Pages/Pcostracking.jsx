import { Grid, InputAdornment, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import Swal from 'sweetalert2';

const validationSchema = yup.object({
  age: yup
    .string('Enter your Age')
    .required('Age is required'),
  bmi: yup
    .string('Enter your Bmi')
    .required('Bmi is required'),
  bpm: yup
    .string('Enter your BPM')
    .required('Bpm is required'),
  height: yup
    .string('Enter your Height')
    .required('Height is required'),
  weight: yup
    .string('Enter your Weight')
    .required('Weight is required'),
  breathe: yup
    .string('Enter your Breathe per minute')
    .required('Breathe per minute is required'),
  cycle: yup
    .string('Enter your Cycle Length')
    .required('Cycle length is required'),
  marriage: yup
    .string('Enter your Marriage years')
    .required('Marriage years is required'),
  pregrant: yup
    .string('Enter your pregrancy times')
    .required('Number of Pregrancy times is required'),
  abortions: yup
    .string('Enter your Number of Absortion')
    .required('Number of Abortion is required'),
  hip: yup
    .string('Enter your Hip size in inch')
    .required('Hip size in inches is required'),
  waist: yup
    .string('Enter your Waist in inches')
    .required('Wasit in inches is required'),
  wgain: yup
    .string('Enter your Weight gain')
    .required('Weight gain is required'),
  hairgain: yup
    .string('Enter your Hair Growth')
    .required('Hair Growth is required'),
  skin: yup
    .string('Enter your Skin Darken')
    .required('Skin Darken is required'),
  hairloss: yup
    .string('Enter your Hair loss')
    .required('Hair loss is required'),
  pimples: yup
    .string('Enter your Pimples')
    .required('Pimples is required'),
  fastfood: yup
    .string('Enter your Fast food')
    .required('Fast food is required'),
  exercise: yup
    .string('Enter your Regular Excercise')
    .required('Regural Excercise is required'),
  bps: yup
    .string('Enter your BP Systolic')
    .required('BP Systolic is required'),
  bpdia: yup
    .string('Enter your BP Diastolic')
    .required('BP Diastolic is required'),
});


const Pcostracking = () => {

  const Output = () => {
    Swal.fire({
      icon: 'success',
      title: `You don't likely have PCOS`,
      showConfirmButton: false,
      timer: 3000
    })
  }


  const formik = useFormik({
    initialValues: {
      age: '',
      bmi: '',
      bpm: '',
      bg: '',
      height: '',
      weight: '',
      breathe: '',
      cycle: '',
      marriage: '',
      pregrant: '',
      abortions: '',
      hip: '',
      waist: '',
      wgain: '',
      hairgain: '',
      skin: '',
      hairloss: '',
      pimple: '',
      fastfood: '',
      excercise: '',
      bps: '',
      bpdia: '',

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });



  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div style={{ fontSize: "2.5rem", marginTop: "2rem" }}>
            Fill in the Details and get your PCOS Diagnosis done with few minutes
          </div>
          <div>
            <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem", marginRight: "1.2rem" }}>
              <Grid container spacing={2} marginTop={2}>
                <Grid item xs={6}>
                  <TextField
                    id="age"
                    name="age"
                    label="Age"
                    type="text"
                    color='secondary'
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.age)}
                    helperText={formik.touched.age && formik.errors.age}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="bmi"
                    name="bmi"
                    label="BMI"
                    color='secondary'
                    value={formik.values.bmi}
                    onChange={formik.handleChange}
                    error={formik.touched.bmi && Boolean(formik.errors.bmi)}
                    helperText={formik.touched.bmi && formik.errors.bmi}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="bpm"
                    name="bpm"
                    label="Pulse Rate in bmp"
                    type="text"
                    color='secondary'
                    value={formik.values.bpm}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.bpm)}
                    helperText={formik.touched.bpm && formik.errors.bpm}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
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
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
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
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="bg"
                    name="bg"
                    label="Blood Group"
                    type="text"
                    color='secondary'
                    value={formik.values.bg}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.bg)}
                    helperText={formik.touched.bg && formik.errors.bg}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="breathe"
                    name="breathe"
                    label="Breathe per minute"
                    color='secondary'
                    value={formik.values.breathe}
                    onChange={formik.handleChange}
                    error={formik.touched.breathe && Boolean(formik.errors.breathe)}
                    helperText={formik.touched.breathe && formik.errors.breathe}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="cycle"
                    name="cycle"
                    label="Cycle Length"
                    type="text"
                    color='secondary'
                    value={formik.values.cycle}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.cycle)}
                    helperText={formik.touched.cycle && formik.errors.cycle}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="marriage"
                    name="marriage"
                    label="Marriage Years"
                    type="text"
                    color='secondary'
                    value={formik.values.marriage}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.marriage)}
                    helperText={formik.touched.marriage && formik.errors.marriage}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="pregrant"
                    name="pregrant"
                    label="Pregrant"
                    type="text"
                    color='secondary'
                    value={formik.values.pregrant}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.pregrant)}
                    helperText={formik.touched.pregrant && formik.errors.pregrant}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="abortions"
                    name="abortions"
                    label="Number of Abosrtions"
                    type="text"
                    color='secondary'
                    value={formik.values.abortions}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.abortions)}
                    helperText={formik.touched.abortions && formik.errors.abortions}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="hip"
                    name="hip"
                    label="Hip Size"
                    color='secondary'
                    value={formik.values.hip}
                    onChange={formik.handleChange}
                    error={formik.touched.hip && Boolean(formik.errors.hip)}
                    helperText={formik.touched.hip && formik.errors.hip}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="waist"
                    name="waist"
                    label="Waist Size"
                    type="text"
                    color='secondary'
                    value={formik.values.waist}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.waist)}
                    helperText={formik.touched.waist && formik.errors.waist}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="wgain"
                    name="wgain"
                    label="Weight Gain"
                    type="text"
                    color='secondary'
                    value={formik.values.wgain}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.wgain)}
                    helperText={formik.touched.wgain && formik.errors.wgain}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="hairgain"
                    name="hairgain"
                    label="Hair Growth"
                    type="text"
                    color='secondary'
                    value={formik.values.hairgain}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.hairgain)}
                    helperText={formik.touched.hairgain && formik.errors.hairgain}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="hairloss"
                    name="hairloss"
                    label="hair Loss"
                    type="text"
                    color='secondary'
                    value={formik.values.hairloss}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.hairloss)}
                    helperText={formik.touched.hairloss && formik.errors.hairloss}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="pimple"
                    name="pimple"
                    label="Pimple Size"
                    type="text"
                    color='secondary'
                    value={formik.values.pimple}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.pimple)}
                    helperText={formik.touched.pimple && formik.errors.pimple}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="excercise"
                    name="excercise"
                    label="Regular Excercise"
                    type="text"
                    color='secondary'
                    value={formik.values.excercise}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.excercise)}
                    helperText={formik.touched.excercise && formik.errors.excercise}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="bps"
                    name="bps"
                    label="BP Systolic"
                    type="text"
                    color='secondary'
                    value={formik.values.bps}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.bps)}
                    helperText={formik.touched.bps && formik.errors.bps}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="bpdia"
                    name="bpdia"
                    label="BP Diastolic"
                    type="text"
                    color='secondary'
                    value={formik.values.bpdia}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.bpdia)}
                    helperText={formik.touched.bpdia && formik.errors.bpdia}
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
              <Button color="secondary" variant="contained" type="submit"
                sx={{ width: "100%", marginTop: "1.2rem", fontSize: "1.1rem" }}
                onClick={Output()}>
                Submit
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Pcostracking
