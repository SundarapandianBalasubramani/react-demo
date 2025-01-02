import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";
import { userApi } from "./services/user";
import { employeeApi } from "./services/employees";
// import { counter } from './reducers/counter';

// Import your reducers here
// import someReducer from './someSlice';

// const rootReducer = combineReducers({
//     // Add your reducers here
//      counter,
// });

const store = configureStore({
  reducer: {
    counter,
    [userApi.reducerPath]: userApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, employeeApi.middleware),
  devTools: import.meta.env.NODE_ENV !== "production",
  // Add any middleware or devTools configuration here if needed
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
