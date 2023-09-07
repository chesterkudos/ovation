import { KudosRoute } from "@kudos/kudos-types";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../routes/Dashboard";
import ErrorPage from "../routes/Error";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Me from "../routes/Me";
import { ProtectedRoute } from "./ProtectedRoute";

export const kudosRoutes: KudosRoute[] = [
  {
    path: "/",
    element: <Home />,
    name: "home",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        name: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/me",
        name: "me",
        element: (
          <ProtectedRoute>
            <Me />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard",
        name: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
];

export const pureRoutes: RouteObject[] = kudosRoutes.map(
  (route: KudosRoute): object => {
    // plucking name out of the array of objects then passing that onto `createBrowserRouter`
    const { name, ...pureRoute } = route;

    return {
      ...pureRoute,
    };
  }
);

const router = createBrowserRouter(pureRoutes);

export const RouteRenderer = () => <RouterProvider router={router} />;
