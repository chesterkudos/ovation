import { Global, css } from "@emotion/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./route-helpers/protected-route";
import Index from "./routes";
import Dashboard from "./routes/dashboard";
import ErrorPage from "./routes/error";
import Login from "./routes/login";
import Me from "./routes/me";

const globalStyles = css`
  html {
    font-size: 16px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
  }

  * {
    padding: 0;
    margin: 0;
  }
`;

const kudosRoutes = [
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/me",
    element: (
      <ProtectedRoute>
        <Me />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter(kudosRoutes);

export const App = () => (
  <>
    <Global styles={globalStyles} />
    <RouterProvider router={router} />
  </>
);
