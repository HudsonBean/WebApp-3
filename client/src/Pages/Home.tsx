import React from "react";
import { useGetTodoListQuery } from "../Features/apiSlice";
const id = "64df8844777d816d1d61ab8d";

export const Home = () => {
  const { data, error, isLoading } = useGetTodoListQuery(
    "64df8844777d816d1d61ab8d",
    undefined
  );
  console.log(data, error, isLoading);
  return <div>Home</div>;
};
