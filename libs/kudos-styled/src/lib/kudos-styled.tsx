import styled from "@emotion/styled";
import { SizeMap, SIZES, Sizes } from "@kudos/kudos-types";

export const Text = styled.p<{ size?: Sizes; color?: string }>`
  color: ${({ color = "#000" }) => color};
  font-size: ${({ size = SIZES.M }) => SizeMap[size]};
  font-weight: normal;
`;
