import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IEmployee } from "../../Components/Employees/Employee";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Employee"],
  endpoints: (builder) => ({
    getEmployees: builder.query<IEmployee[], void>({
      query: () => "employees",
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Employee" as const, id }))]
          : [{ type: "Employee" }],
    }),
    getLastEmployee: builder.query<IEmployee[], void>({
      query: () => "employees/?_sort=-id&_limit=1",
    }),
    getEmployee: builder.query<IEmployee, number>({
      query: (id) => `employees/${id}`,
    }),
    createEmployee: builder.mutation<IEmployee, Partial<IEmployee>>({
      query: (body) => ({
        url: `employees`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Employee" }],
    }),
    updateEmployee: builder.mutation<IEmployee, Partial<IEmployee>>({
      query: (body) => ({
        url: `employees/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (_, __, { id }) => [{ type: "Employee", id }],
    }),
    deleteEmployee: builder.mutation<void, number>({
      query: (id) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateEmployeeMutation,
  useDeleteEmployeeMutation,
  useLazyGetLastEmployeeQuery,

  useUpdateEmployeeMutation,
  useGetEmployeesQuery,
} = employeeApi;
