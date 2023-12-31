/* FORMULARIO DE REGISTRO */
import { useFormik } from 'formik';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';


import { validate } from '../Validation';

import { useAuth } from '../contexts/UseAuth';
import BaseForm from '../components/BaseForm';


/*FUNCION CUSTOMIZADA PARA VALIDAR DATOS */

function SignUpForm() {


    const navigate = useNavigate();
    const { signUp } = useAuth();
    const [error, setError] = useState('');

    const onSubmit = async (values) => {
        const { email, password } = values;
        try {
          await signUp(email, password);
          navigate('/');
        } catch (e) {
          if (e.code === 'auth/email-already-in-use') {
            setError('Email already in use');
          }
        }
      };


    return (

        // <BaseForm
        // title="Register"
        // imageSrc="/vecteezy_vector-concept-illustration-specialists-choosing-best_7938811.jpg"
        // buttonText="Sign Up"
        // onSubmit={onSubmit}
        // error={error}
        // />

        <p>Hello</p>

    )
}

export default SignUpForm