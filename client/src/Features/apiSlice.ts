import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<Object, undefined>({
      query: () => "/todos",
    }),
  }),
});

export const { useGetAllTodosQuery } = api;
