import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../Components/Users/User";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => "users",
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "User" as const, id }))]
          : [{ type: "User" }],
    }),
    getLastUser: builder.query<IUser[], void>({
      query: () => "users/?_sort=-id&_limit=1",
    }),
    getUser: builder.query<IUser, number>({
      query: (id) => `users/${id}`,
    }),
    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: `users`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User" }],
    }),
    updateUser: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: `users/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (_, __, { id }) => [{ type: "User", id }],
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetLastUserQuery,
  useLazyGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
