import { Global, css } from "@emotion/react";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./route-helpers/protected-route";
import Index from "./routes";
import Dashboard from "./routes/dashboard";
import ErrorPage from "./routes/error";
import Login from "./routes/login";

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
`;

const router = createBrowserRouter([
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
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Global styles={globalStyles} />
    <RouterProvider router={router} />
  </StrictMode>
);
