import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {},
    isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.value = action.payload;
            if (action.payload.token) {
                state.isLogin = true;
            }

            localStorage.setItem('token', action.payload.data.data.access_token);
        },
        signOutUser: (state) => {
            state.isLogin = false;
            localStorage.removeItem('token');
        },
    },
});

export const { loginUser, signOutUser } = authSlice.actions;
export default authSlice.reducer;
