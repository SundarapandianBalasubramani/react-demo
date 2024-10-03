import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../Components/Users/User";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000'}),
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => `users`
        })
    })
});

export const { useGetUsersQuery } = userApi;