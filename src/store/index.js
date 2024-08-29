import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import authSlice from './authSlice';

const persistAuthConfig = {
    key: 'auth',
    storage,
};

const persistAuth = persistReducer(persistAuthConfig, authSlice);

export const store = configureStore({
    reducer: {
        auth: persistAuth,
    },
});

export const persistor = persistStore(store);
