export enum ALIGNMENT {
  TOP = "TOP",
  TOP_RIGHT = "TOP_RIGHT",
  TOP_LEFT = "TOP_LEFT",
  BOTTOM = "BOTTOM",
  BOTTOM_RIGHT = "BOTTOM_RIGHT",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export type Alignment = typeof ALIGNMENT[keyof typeof ALIGNMENT];

// * Justify Items

// /* Basic keywords */
// justify-items: normal;
// justify-items: stretch;

// /* Positional alignment */
// justify-items: center; /* Pack items around the center */
// justify-items: start; /* Pack items from the start */
// justify-items: end; /* Pack items from the end */
// justify-items: flex-start; /* Equivalent to 'start'. Note that justify-items is ignored in Flexbox layouts. */
// justify-items: flex-end; /* Equivalent to 'end'. Note that justify-items is ignored in Flexbox layouts. */
// justify-items: self-start;
// justify-items: self-end;
// justify-items: left; /* Pack items from the left */
// justify-items: right; /* Pack items from the right */

// /* Baseline alignment */
// justify-items: baseline;
// justify-items: first baseline;
// justify-items: last baseline;

// /* Overflow alignment (for positional alignment only) */
// justify-items: safe center;
// justify-items: unsafe center;

// /* Legacy alignment */
// justify-items: legacy right;
// justify-items: legacy left;
// justify-items: legacy center;

// /* Global values */
// justify-items: inherit;
// justify-items: initial;
// justify-items: revert;
// justify-items: revert-layer;
// justify-items: unset;

export enum JUSTIFY_ITEMS {
  NORMAL = "normal",
  STRETCH = "stretch",

  CENTER = "center",
  START = "start",
  END = "end",

  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  SELF_START = "self-start",
  SELF_END = "self-end",
  LEFT = "left",
  RIGHT = "right",

  BASELINE = "baseline",
  BASELINE_FIRST = "first baseline",
  BASELINE_LAST = "last baseline",

  SAFE_CENTER = "safe center",
  CENTER_SAFE = "unsafe center",

  INHERIT = "inherit",
  INITIAL = "initial",
  REVERT = "revert",
  REVERT_LAYER = "revert-layer",
  UNSET = "unset",
}

export type JustifyItems = typeof JUSTIFY_ITEMS[keyof typeof JUSTIFY_ITEMS];

// * Justify Contents

// /* Positional alignment */
// justify-content: center; /* Pack items around the center */
// justify-content: start; /* Pack items from the start */
// justify-content: end; /* Pack items from the end */
// justify-content: flex-start; /* Pack flex items from the start */
// justify-content: flex-end; /* Pack flex items from the end */
// justify-content: left; /* Pack items from the left */
// justify-content: right; /* Pack items from the right */

// /* Baseline alignment */
// /* justify-content does not take baseline values */

// /* Normal alignment */
// justify-content: normal;

// /* Distributed alignment */
// justify-content: space-between; /* Distribute items evenly
//                                    The first item is flush with the start,
//                                    the last is flush with the end */
// justify-content: space-around; /* Distribute items evenly
//                                    Items have a half-size space
//                                    on either end */
// justify-content: space-evenly; /* Distribute items evenly
//                                    Items have equal space around them */
// justify-content: stretch; /* Distribute items evenly
//                                    Stretch 'auto'-sized items to fit
//                                    the container */

// /* Overflow alignment */
// justify-content: safe center;
// justify-content: unsafe center;

// /* Global values */
// justify-content: inherit;
// justify-content: initial;
// justify-content: revert;
// justify-content: revert-layer;
// justify-content: unset;

export enum JUSTIFY_CONTENT {
  NORMAL = "normal",

  CENTER = "center",
  START = "start",
  END = "end",

  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  SELF_START = "self-start",
  SELF_END = "self-end",
  LEFT = "left",
  RIGHT = "right",

  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around",
  SPACE_EVENLY = "space-evenly",
  STRETCH = "stretch",

  SAFE_CENTER = "safe center",
  CENTER_SAFE = "unsafe center",

  INHERIT = "inherit",
  INITIAL = "initial",
  REVERT = "revert",
  REVERT_LAYER = "revert-layer",
  UNSET = "unset",
}

export type JustifyContent =
  typeof JUSTIFY_CONTENT[keyof typeof JUSTIFY_CONTENT];

// * Align Items

// /* Basic keywords */
// align-items: normal;
// align-items: stretch;

// /* Positional alignment */
// /* align-items does not take left and right values */
// align-items: center; /* Pack items around the center */
// align-items: start; /* Pack items from the start */
// align-items: end; /* Pack items from the end */
// align-items: flex-start; /* Pack flex items from the start */
// align-items: flex-end; /* Pack flex items from the end */
// align-items: self-start; /* Pack flex items from the start */
// align-items: self-end; /* Pack flex items from the end */

// /* Baseline alignment */
// align-items: baseline;
// align-items: first baseline;
// align-items: last baseline; /* Overflow alignment (for positional alignment only) */

// align-items: safe center;
// align-items: unsafe center;

// /* Global values */
// align-items: inherit;
// align-items: initial;
// align-items: revert;
// align-items: revert-layer;
// align-items: unset;

export enum ALIGN_ITEMS {
  NORMAL = "normal",
  STRETCH = "stretch",

  CENTER = "center",
  START = "start",
  END = "end",

  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  SELF_START = "self-start",
  SELF_END = "self-end",
  LEFT = "left",
  RIGHT = "right",

  BASELINE = "baseline",
  BASELINE_FIRST = "first baseline",
  BASELINE_LAST = "last baseline",

  SAFE_CENTER = "safe center",
  CENTER_SAFE = "unsafe center",

  INHERIT = "inherit",
  INITIAL = "initial",
  REVERT = "revert",
  REVERT_LAYER = "revert-layer",
  UNSET = "unset",
}

export type AlignItems = typeof ALIGN_ITEMS[keyof typeof ALIGN_ITEMS];

// * Align Content

// /* Basic positional alignment */
// /* align-content does not take left and right values */
// align-content: center; /* Pack items around the center */
// align-content: start; /* Pack items from the start */
// align-content: end; /* Pack items from the end */
// align-content: flex-start; /* Pack flex items from the start */
// align-content: flex-end; /* Pack flex items from the end */

// /* Normal alignment */
// align-content: normal;

// /* Baseline alignment */
// align-content: baseline;
// align-content: first baseline;
// align-content: last baseline;

// /* Distributed alignment */
// align-content: space-between; /* Distribute items evenly
//                                  The first item is flush with the start,
//                                  the last is flush with the end */
// align-content: space-around; /* Distribute items evenly
//                                  Items have a half-size space
//                                  on either end */
// align-content: space-evenly; /* Distribute items evenly
//                                  Items have equal space around them */
// align-content: stretch; /* Distribute items evenly
//                                  Stretch 'auto'-sized items to fit
//                                  the container */

// /* Overflow alignment */
// align-content: safe center;
// align-content: unsafe center;

// /* Global values */
// align-content: inherit;
// align-content: initial;
// align-content: revert;
// align-content: revert-layer;
// align-content: unset;

export enum ALIGN_CONTENT {
  NORMAL = "normal",

  CENTER = "center",
  START = "start",
  END = "end",

  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  SELF_START = "self-start",
  SELF_END = "self-end",
  LEFT = "left",
  RIGHT = "right",

  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around",
  SPACE_EVENLY = "space-evenly",
  STRETCH = "stretch",

  SAFE_CENTER = "safe center",
  CENTER_SAFE = "unsafe center",

  INHERIT = "inherit",
  INITIAL = "initial",
  REVERT = "revert",
  REVERT_LAYER = "revert-layer",
  UNSET = "unset",
}

export type AlignContent = typeof ALIGN_CONTENT[keyof typeof ALIGN_CONTENT];
