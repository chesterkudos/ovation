import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import { Global, css } from "@emotion/react";

import App from "./app/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <Global
      styles={css`
        html {
          font-size: 16px;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
        }

        body {
          padding: 0;
          margin: 0;
        }
      `}
    />
    <App />
  </StrictMode>
);
