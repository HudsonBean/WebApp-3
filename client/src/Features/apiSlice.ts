import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { listOfLists } from "../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<listOfLists, undefined>({
      query: () => "/todos",
    }),
    getTodoList: builder.query<String, String>({
      query: (id: String) => `/todos/${id}`,
    }),
  }),
});

export const { useGetAllTodosQuery, useGetTodoListQuery } = api;
