import {  configureStore } from '@reduxjs/toolkit';
import counter from './slices/counter';
import { userApi } from './services/user';


const store = configureStore({
    reducer:{
        counter: counter,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
    devTools: import.meta.env.NODE_ENV !== 'production'
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;