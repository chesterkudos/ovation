export enum TEXT_ALIGNMENT {
  CENTER = "center",
  END = "end",
  JUSTIFY = "justify",
  JUSTIFY_ALL = "justify-all",
  LEFT = "left",
  MATCH_PARENT = "match-parent",
  REVERT = "revert",
  RIGHT = "right",
  START = "start",
}

export type TextAlignment = typeof TEXT_ALIGNMENT[keyof typeof TEXT_ALIGNMENT];
