export type Rem = `${number}rem` | "0";
export type Padding =
  | Rem
  | `${Rem} ${Rem}`
  | `${Rem} ${Rem} ${Rem}`
  | `${Rem} ${Rem} ${Rem} ${Rem}`;

export type Gap = Rem | `${Rem} ${Rem}`;

export type Pixel = `${number}px`;
