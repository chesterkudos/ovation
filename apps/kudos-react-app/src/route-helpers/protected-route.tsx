import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const loggedIn = (): boolean => Math.random() >= 0.5;

export const ProtectedRoute = ({
  children,
  redirectPath = "/",
}: {
  children: ReactNode;
  redirectPath?: string;
}) => (loggedIn() ? children : <Navigate to={redirectPath} />);
