export const inputData = [
    {
        label: 'Email',
        id: 'email',
        type: 'email',
        validation: {
            required: 'Email is required',
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email must be a valid email address'
            }
        }
    },
    {
        label: 'Password',
        id: 'password',
        type: 'password',
        validation: {
            required: 'Password is required',
            minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
            }
        }
    },
    {
        label: 'Remember me',
        id: 'rememberMe',
        type: 'checkbox',
        validation: {}
    }
];