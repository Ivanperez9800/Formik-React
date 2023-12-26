import { useFormik } from "formik";
import { useEffect, useState } from 'react';

import { validate } from '../Validation';


import { Link } from "react-router-dom";

import form from '../Styles/Form.module.css';

function BaseForm({ title, imageSrc, buttonText, onSubmit, error }) {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit,
    });

    const [show, setShow] = useState(false);
    const cantErrors = Object.keys(formik.errors).length > 0;

    const handleShowPassword = () => {
        setShow(!show);
    };


    useEffect(() => {
        document.title = `CurriFacil - titulo`;
    }, [title]);

    return (
        <div className={form.main_card}>
            <div className={form.banne_rcard}>
                <img src={imageSrc} alt="cv image" width="580px" />
            </div>
            
            <div className={form.form_card}>

                <div className={form.card_title_img}>
                    <h1 className={form.title_form} >{title}</h1>
                    <img src="./CurriFacil-logos_transparent.png" alt="cv image" width="140px" />
                </div>

                <form onSubmit={formik.handleSubmit} >

                    {
                        error &&
                        <div className={form.error_firebase}>
                            <p>{error}</p>
                        </div>
                    }


                    <div className={form.input_group}>
                        <input type="text"
                            id='email'
                            placeholder='email@email.com'
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email || ''}
                            autoComplete='off'
                            aria-label='email'
                        />
                        {formik.errors.email ? <p className={form.error}>{formik.errors.email}</p> : null}
                    </div>

                    <div className={form.input_group}>
                        <div className={form.password_card}>
                            <div className={form.password_input_container}>
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
                                    className={form.show}
                                    onClick={handleShowPassword}
                                    aria-label={show ? 'Hide Password' : 'Show Password'}
                                >
                                    {show ? 'Hide' : 'Show'}
                                </button>

                            </div>
                        </div>
                        {formik.errors.password ? <p className={form.error} >{formik.errors.password}</p> : null}
                    </div>
                    <div className={form.button_group}>
                        <button type='submit' disabled={cantErrors} className={!cantErrors ? form.submit : ""}   >{buttonText}</button>

                        {/* <p>Do you have an account?<Link to="/login">Login Here</Link> </p>*/}
                        {
                            title === 'Login' ? (
                                <p>Don't you have an account?<Link to="/register">Register Here</Link></p>
                            ) : (
                                <p>Do you have an account? <Link to="/login">Login Here</Link></p>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>


        // <div className={form.main_card}>
        //     hello
        // </div>

    )
}

export default BaseForm