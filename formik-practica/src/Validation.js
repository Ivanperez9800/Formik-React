export const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password Required';
    } else if (values.password.length < 8) {
        errors.password = 'Choose a more difficult password. Use a combination of letters,numbers and signs that you can remember.';


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