export enum SIZES {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export type Sizes = typeof SIZES[keyof typeof SIZES];

export const SizeMap: Record<Sizes, string> = {
  XS: "0.8rem",
  S: "1rem",
  M: "1.2rem",
  L: "1.4rem",
  XL: "2rem",
  XXL: "2.4rem",
};
