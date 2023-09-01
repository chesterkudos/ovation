import { css } from "@emotion/react";

export const globalStyles = css`
  html {
    -webkit-text-size-adjust: 100%;
    font-size: 16px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    line-height: 1.5;
    tab-size: 4;
    scroll-behavior: smooth;
    color-scheme: dark light;
  }

  body {
    font-family: inherit;
    line-height: inherit;
    min-height: 100vh;
    background-color: #f2f2f2;
    color: #333;
  }

  * {
    padding: 0;
    margin: 0;
  }

  input {
    all: unset;
    padding: 0.5rem;
    border: 1px solid #333;
  }

  button {
    cursor: pointer;
  }

  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }

  input,
  textarea,
  button,
  select {
    font: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
