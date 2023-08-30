export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

// ! https://w3schools.sinsixx.com/css/css_colornames.asp.htm#:~:text=The%20W3C%20HTML%20and%20CSS,teal%2C%20white%2C%20and%20yellow.
// add more colours as needed
export type BuiltInColors =
  | "black"
  | "silver"
  | "gray"
  | "purple"
  | "fuchsia"
  | "navy"
  | "white"
  | "red"
  | "blue"
  | "green"
  | "yellow";

export type Transparent = "transparent";
export type Color = RGB | RGBA | HEX | Transparent | BuiltInColors;
