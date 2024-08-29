export const validate = (email, password, setErrors) => {
    let isValid = true;
    let errors = {};

    if (!email) {
        errors.email = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email address is invalid';
        isValid = false;
    }

    if (!password) {
        errors.password = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
        isValid = false;
    }

    setErrors(errors);
    return isValid;
};
