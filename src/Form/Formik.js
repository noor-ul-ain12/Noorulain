import React from 'react'
import { useFormik } from 'formik'
function Formik() {
  const formik = useFormik({
    initialValues: {
      name: ' ',
      email: ' ',
      phone: ' ',
    },

    onSubmit: (values) => {
      console.log('form data', values)
    },

    validate: (values) => {
      //value.name, email, phone
      //values should be string
      let error = {}
      if (!values.name) {
        error.name = 'Required field'
      }
      if (!values.email) {
        error.email = 'required'
      }
      //else if (!/^[A-Z0-9, ._%+-] +![A-Z0-9.-] + )
      if (!values.phone) {
        error.email = 'required'
      }
    },
  })
  //console.log('form values', formik.values)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'> Name </label>
        <input
          type='text'
          id='name'
          placeholder='enter your name'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        ></input>
        <br /> <br />
        <label htmlFor='emai'> Email </label>
        <input
          type='text'
          id='email'
          placeholder='enter your email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br /> <br />
        <label htmlFor='phone'> Phone</label>
        <input
          type='text'
          id='phone'
          placeholder='enter your phone'
          name='phone'
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <br /> <br />
        <button type='submit'> Submit</button>
      </form>
    </div>
  )
}

export default Formik
