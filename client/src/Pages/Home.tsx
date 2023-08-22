import React from "react";
import { useGetAllTodosQuery } from "../Features/apiSlice";

export const Home = () => {
  const { data, error, isLoading } = useGetAllTodosQuery(undefined);
  console.log(data, error, isLoading);
  return <div>Home</div>;
};
