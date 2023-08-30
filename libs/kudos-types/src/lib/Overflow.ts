// /* Keyword values */
// overflow: visible;
// overflow: hidden;
// overflow: clip;
// overflow: scroll;
// overflow: auto;
// overflow: hidden visible;

// /* Global values */
// overflow: inherit;
// overflow: initial;
// overflow: revert;
// overflow: revert-layer;
// overflow: unset;

export enum OVERVFLOW {
  VISIBLE = "visible",
  HIDDEN = "hidden",
  CLIP = "clip",
  SCROLL = "scroll",
  AUTO = "auto",
  INHERIT = "inherit",
  INITIAL = "initial",
  REVERT = "revert",
  REVERT_LAYER = "revert-layer",
  UNSET = "unset",
}

export type Overflow = typeof OVERVFLOW[keyof typeof OVERVFLOW];
