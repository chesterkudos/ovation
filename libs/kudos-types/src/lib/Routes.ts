import { RouteObject } from "react-router-dom";

export type KudosRoute = Omit<RouteObject, "children"> & {
  name: string;
  children?: KudosRoute[];
};
