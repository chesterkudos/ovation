// ///////////////////////
// Object Fit
// ///////////////////////

// object-fit: contain;
// object-fit: cover;
// object-fit: fill;
// object-fit: none;
// object-fit: scale-down;

// /* Global values */
// object-fit: inherit;
// object-fit: initial;
// object-fit: revert;
// object-fit: revert-layer;
// object-fit: unset;

export enum OBJECT_FIT {
  CONTAIN = "contain",
  COVER = "cover",
  FILL = "fill",
  NONE = "none",
  SCALE_DOWN = "scale-down",
  /* Global values */
  INHERIT = "inherit",
  INITIAL = "initial",
  REVERT = "revert",
  REVERT_LAYER = "revert-layer",
  UNSET = "unset",
}

export type ObjectFit = typeof OBJECT_FIT[keyof typeof OBJECT_FIT];
