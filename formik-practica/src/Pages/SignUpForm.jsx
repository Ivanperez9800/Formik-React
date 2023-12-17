/* FORMULARIO DE REGISTRO */
import { useFormik } from 'formik';

import { validate } from '../Validation';
import { useState } from 'react';



import '../Styles/Form.css';
import { Link } from 'react-router-dom';

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
            console.log(values.email)
        },
    });


    const [show, setShow] = useState(false);

    const handleShowPassword = () => {
        setShow(!show);
    }

    return (
        // <form onSubmit={formik.handleSubmit} >
        //     <label htmlFor="email">Email</label>
        //     <input
        //         id="email"
        //         name="email"
        //         type="text"
        //         onChange={formik.handleChange}
        //         value={formik.values.email}
        //         autoComplete="off"
        //     />
        //     {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        //     <label htmlFor="email">Password</label>
        //     <input
        //         id="password"
        //         name="password"
        //         type="password"
        //         onChange={formik.handleChange}
        //         value={formik.values.password}
        //         autoComplete="off"
        //     />
        //     {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        //     <button type="submit">Submit</button>
        // </form>

        <div className='main-card'>
            <div className='banner-card'>
                <img src="./Register-banner-photo.jpg" alt="cv image" width="580px" />
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
                        
                        <p>Do you have an account?<Link to ="/Login">Login Here</Link> </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUpForm