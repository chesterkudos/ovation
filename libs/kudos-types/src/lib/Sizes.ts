export enum SIZES {
  XXS = "XXS",
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
  XXXL = "XXXL",
}

export type Sizes = typeof SIZES[keyof typeof SIZES];

export const SizeMap: Record<Sizes, string> = {
  XXS: "0.5rem", // 16 x 0.5 = 8px
  XS: "0.75rem", // 16 x 0.75 = 12px
  S: "0.875rem", // 16 x 0.875 = 14px
  M: "1rem", // 16 x 1 = 16px
  L: "1.125rem", // 16 x 1.125 = 18px
  XL: "1.25rem", // 16 x 1.25 = 20px
  XXL: "1.5rem", // 16 x 1.5 = 24px
  XXXL: "1.75rem", // 16 x 2.25 = 28px
};
