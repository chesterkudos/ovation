import styled from "@emotion/styled";
import { SizeMap, SIZES, Sizes } from "@kudos/kudos-types";

type TextProps = { size?: Sizes; color?: string };

export const Text = styled.p<TextProps>`
  color: ${({ color = "#000" }) => color};
  font-size: ${({ size = SIZES.M }) => SizeMap[size]};
`;

export const H1 = styled.h1<TextProps>`
  color: ${({ color = "#000" }) => color};
  font-size: 2rem;
  font-weight: bold;
`;

export const H2 = styled.h2<TextProps>`
  color: ${({ color = "#000" }) => color};
  font-size: 1.8rem;
  font-weight: bold;
`;

export const H3 = styled.h3<TextProps>`
  color: ${({ color = "#000" }) => color};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const H4 = styled.h4<TextProps>`
  color: ${({ color = "#000" }) => color};
  font-size: 1.4rem;
  font-weight: bold;
`;
