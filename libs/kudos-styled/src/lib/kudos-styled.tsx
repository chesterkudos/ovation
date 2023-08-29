import styled from "@emotion/styled";
import { SizeMap, SIZES, Sizes } from "@kudos/kudos-types";

type TextProps = { size?: Sizes; color?: string };

export const Text = styled.p<TextProps>`
  color: ${({ color = "#000" }) => color};
  font-size: ${({ size = SIZES.M }) => SizeMap[size]};
`;

export const H1 = styled.h1<TextProps>`
  color: ${({ color = "#000" }) => color};
  font-size: ${({ size = SIZES.M }) => SizeMap[size]};
`;

export const H2 = styled.h2<TextProps>`
  color: ${({ color = "#000" }) => color};
  font-size: ${({ size = SIZES.M }) => SizeMap[size]};
`;
