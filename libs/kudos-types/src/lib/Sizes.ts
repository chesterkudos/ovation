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
  XS: "0.875rem", // 16 x 0.875 = 14px
  S: "1rem", // 16 x 1 = 16px
  M: "1.25rem", // 16 x 1.25 = 18px
  L: "1.5rem", // 16 x 1.6 = 20px
  XL: "2rem", // 16 x 2 = 24px
  XXL: "2.4rem", // 16 x 2.25 = 28px
};
