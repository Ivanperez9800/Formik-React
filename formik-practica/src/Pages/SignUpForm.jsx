/* FORMULARIO DE REGISTRO */
import { useFormik } from 'formik';

import { validate } from '../Validation';

/*FUNCION CUSTOMIZADA PARA VALIDAR DATOS */

function SignUpForm() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            console.log(values.email)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} >
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <label htmlFor="email">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}

            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUpForm