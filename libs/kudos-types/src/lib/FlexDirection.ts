export enum FLEX_DIRECTION {
  ROW = "row",
  COLUMN = "column",
  ROW_REVERSE = "row-reverse",
  COLUMN_REVERSE = "column-reverse",
  /* Global values */
  INHERIT = "inherit",
  INITIAL = "initial",
  REVERT = "revert",
  REVERT_LAYER = "revert-layer",
  UNSET = "unset",
}

export type FlexDirection = typeof FLEX_DIRECTION[keyof typeof FLEX_DIRECTION];
