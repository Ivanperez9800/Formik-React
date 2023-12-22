/* FORMULARIO DE REGISTRO */
import { useFormik } from 'formik';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import { validate } from '../Validation';

import '../Styles/Form.css';


/*FUNCION CUSTOMIZADA PARA VALIDAR DATOS */

function SignUpForm() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            /*Aca mandar a firebase*/
            console.log(values.email,values.password)
        },
    });


    const [show, setShow] = useState(false);

    const handleShowPassword = () => {
        setShow(!show);
    }

    return (

        <div className='main-card'>
            <div className='banner-card'>
                <img src="./vecteezy_vector-concept-illustration-specialists-choosing-best_7938811.jpg" alt="cv image" width="580px" />
            </div>
            <div className='form-card'>

                <h1 className='title-form' >Register</h1>
                <form onSubmit={formik.handleSubmit} >

                    <div className="input-group">
                        <input type="text"
                            id='email'
                            placeholder='email@email.com'
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email || ''}
                            autoComplete='off'
                            aria-label='email'
                        />
                        {formik.errors.email ? <p className='error'>{formik.errors.email}</p> : null}
                    </div>

                    <div className="input-group">
                        <div className="password-card">
                            <div className="password-input-container">
                                <input
                                    type={show ? 'text' : 'password'}
                                    id='password'
                                    name='password'
                                    placeholder='***********'
                                    onChange={formik.handleChange}
                                    value={formik.values.password || ''}
                                    autoComplete='off'
                                    aria-label='password'
                                />

                                <button
                                    type='button'
                                    className='show'
                                    onClick={handleShowPassword}
                                    aria-label={show ? 'Hide Password' : 'Show Password'}
                                >
                                    {show ? 'Hide' : 'Show'}
                                </button>

                            </div>
                        </div>
                        {formik.errors.password ? <p className='error' >{formik.errors.password}</p> : null}
                    </div>
                    <div className="button-group">
                        <button type='submit' disabled={formik.isSubmitting}>Sign Up</button>
                        
                        <p>Do you have an account?<Link to ="/login">Login Here</Link> </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUpForm