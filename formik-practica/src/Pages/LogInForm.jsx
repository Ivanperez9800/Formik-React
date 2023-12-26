/*FORMULRIO DE LOGEO */

import { useFormik } from 'formik';

import { validate } from '../Validation';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/UseAuth';
import BaseForm from '../components/BaseForm';


function LogInForm() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState('');

  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: ''
  //   },
  //   validate,
  //   onSubmit: async values => {
  //     const { email, password } = values;
  //     // console.log(values.email)
  //     try {

  //       setError('');
  //       await login(email, password);

  //       navigate('/');
  //     } catch (e) {
  //       if (e.code === 'auth/invalid-credential') {

  //         setError('Invalid Email or Password');

  //       }


  //       else if (e.code === 'auth/too-many-requests') {
  //         setError("Too many requests, try again.")
  //       }
  //     }

  //   },
  // });

  // const [show, setShow] = useState(false);

  // const cantErrors = Object.keys(formik.errors).length > 0;

  // const handleShowPassword = () => {
  //   setShow(!show);
  // }
  // const handleInputFocus = () => {
  //   setError('');
  // };


  // useEffect(() => {
  //   document.title = 'CurriFacil - Login';
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }


  const  onSubmit= async (values) => {
    const { email, password } = values;
    // console.log(values.email)
    try {

      setError('');
      await login(email, password);

      navigate('/');
    } catch (e) {
      if (e.code === 'auth/invalid-credential') {

        setError('Invalid Email or Password');

      }


      else if (e.code === 'auth/too-many-requests') {
        setError("Too many requests, try again.")
      }
    }

  }

  return (
   
    <p>Login</p>

  )
}

export default LogInForm