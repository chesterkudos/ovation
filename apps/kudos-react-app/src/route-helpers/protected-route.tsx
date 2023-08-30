import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const loggedIn: boolean = false;

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  return loggedIn ? children : <Navigate to="/" />;
};
