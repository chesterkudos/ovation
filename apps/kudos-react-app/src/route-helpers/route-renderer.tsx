import { KudosRoute } from "@kudos/kudos-types";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "../routes/dashboard";
import ErrorPage from "../routes/error";
import Home from "../routes/home";
import Login from "../routes/login";
import Me from "../routes/me";
import { ProtectedRoute } from "./protected-route";

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

const router = createBrowserRouter(
  kudosRoutes.map((route: KudosRoute) => {
    // plucking name out of the array of objects then passing that onto `createBrowserRouter`
    const { name, ...pureRoute } = route;

    return {
      ...pureRoute,
    };
  })
);

export const RouteRenderer = () => <RouterProvider router={router} />;
