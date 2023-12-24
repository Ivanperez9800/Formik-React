/* FORMULARIO DE REGISTRO */
import { useFormik } from 'formik';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';


import { validate } from '../Validation';

import '../Styles/Form.css';
import { useAuth } from '../contexts/UseAuth';


/*FUNCION CUSTOMIZADA PARA VALIDAR DATOS */

function SignUpForm() {


    const navigate = useNavigate();
    const { signUp } = useAuth();
    const [error, setError] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: async values => {
            /*Aca mandar a firebase*/
            const { email, password } = values
            // console.log(email,password)
            try {
                await signUp(email, password);
                navigate('/');
            } catch (e) {
                if (e.code === 'auth/email-already-in-use') {
                    setError('Email already in use')
                }
            }

        },
    });


    const [show, setShow] = useState(false);

    const cantErrors = Object.keys(formik.errors).length > 0;

    const handleShowPassword = () => {
        setShow(!show);
    }

    useEffect(() => {
        document.title = 'CurriFacil - Sign Up';
    }, []);



    return (

        <div className='main-card'>
            <div className='banner-card'>
                <img src="./vecteezy_vector-concept-illustration-specialists-choosing-best_7938811.jpg" alt="cv image" width="580px" />
            </div>
            <div className='form-card'>

                <div className="card-title-img">
                    <h1 className='title-form' >Register</h1>
                    <img src="./CurriFacil-logos_transparent.png" alt="cv image" width="140px" />
                </div>

                <form onSubmit={formik.handleSubmit} >

                    {
                        error &&
                        <div className="error-firebase">
                            <p>{error}</p>
                        </div>
                    }


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
                        <button type='submit' disabled={cantErrors} className={!cantErrors ? "submit" : ""}   >Sign Up</button>

                        <p>Do you have an account?<Link to="/login">Login Here</Link> </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUpForm