import { RouteObject } from "react-router-dom";

// type KudosRoute = {
//   path: string;
//   exact: boolean;
//   name: string;
//   component: JSX.Element;
//   errorElement?: JSX.Element;
//   children?: Array<KudosRoute>;
// };

export type KudosRoute = RouteObject & any;
