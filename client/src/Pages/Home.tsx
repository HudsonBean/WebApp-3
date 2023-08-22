import React from "react";
import { useGetAllTodosQuery, useGetTodoListQuery } from "../Features/apiSlice";
const id = "64df8844777d816d1d61ab8d";

export const Home = () => {
  //   const { data, error, isLoading } = useGetTodoListQuery(
  //     "64df8844777d816d1d61ab8d",
  //     undefined
  //   );
  const { data, error, isLoading } = useGetAllTodosQuery(undefined);
  console.log(data?.todoLists[0], error, isLoading);
  return <div>Home</div>;
};
