import { Global } from "@emotion/react";
import { globalStyles } from "../styles/global";
import { RouteRenderer } from "./route-helpers/route-renderer";

export const App = () => (
  <>
    <Global styles={globalStyles} />
    <RouteRenderer />
  </>
);
