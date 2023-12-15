/* FORMULARIO DE REGISTRO */
import { useFormik } from 'formik';


/*FUNCION CUSTOMIZADA PARA VALIDAR DATOS */

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password Required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters at less';


    }else if ( !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_¿¡])[A-Za-z\d@$!%*?&_¿¡]{8,}$/.test(values.password)){
        // (?=.*[A-Z]): Al menos una letra mayúscula]
        // (?=.*[a-z]): Al menos una letra minúscula.
        // (?=.*\d): Al menos un dígito.
        // (?=.*[@$!%*?&])
        // [A-Za-z\d@$!%*?&]{8,}
        // $: Coincide con el final de la cadena.
        errors.password = 'Password is too Weak';
    }
    // console.log(errors.password);
    return errors;
};

function SignUpForm() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            console.log(values.email,values.password)
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
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}

            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUpForm