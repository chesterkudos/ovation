import styled from "@emotion/styled";
import {
  ALIGN_CONTENT,
  ALIGN_ITEMS,
  AlignContent,
  AlignItems,
  Color,
  JUSTIFY_CONTENT,
  JUSTIFY_ITEMS,
  JustifyContent,
  JustifyItems,
  OVERVFLOW,
  Overflow,
} from "@kudos/kudos-types";

export const CenteredContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  gap: 1rem;
  background-color: #18dbf5;
  margin: 0 auto;
  max-width: 1480px;
`;

export type GridContainerProps = {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  backgroundColor?: Color;
  border?: string;
  columns?: number;
  columnTemplate?: string;
  gap?: string;
  gridArea?: string;
  gridColumn?: string;
  gridTemplateAreas?: string;
  justifyContent?: JustifyContent;
  justifyItems?: JustifyItems;
  height?: number | string;
  overflow?: Overflow;
  padding?: string;
  rowTemplate?: string;
  width?: number | string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  align-items: ${({ alignItems = ALIGN_ITEMS.START }) => alignItems};
  align-content: ${({ alignContent = ALIGN_CONTENT.START }) => alignContent};
  gap: ${({ gap = "1rem" }) => gap};
  padding: ${({ padding = "1rem" }) => padding};
  grid-template-columns: ${({ columns = 1, columnTemplate = "1fr" }) => {
    if (columnTemplate.includes(" ")) {
      // if columnTemplate is a space delimited string, it wil use that to define the columns
      // and ignore the `columns` prop
      return columnTemplate;
    } else {
      return `repeat(${columns}, ${columnTemplate})`;
    }
  }};
  grid-template-rows: ${({ rowTemplate = "auto" }) => rowTemplate};
  width: ${({ width = "auto" }) =>
    typeof width === "string" ? width : `${width}px`};
  height: ${({ height = "auto" }) =>
    typeof height === "string" ? height : `${height}px`};
  justify-content: ${({ justifyContent = JUSTIFY_CONTENT.START }) =>
    justifyContent};
  justify-items: ${({ justifyItems = JUSTIFY_ITEMS.START }) => justifyItems};
  background-color: ${({ backgroundColor = "transparent" }) => backgroundColor};
  box-sizing: border-box;
  border: ${({ border = "0 solid transparent" }) => border};
  grid-template-areas: ${({ gridTemplateAreas = "" }) => gridTemplateAreas};
  grid-area: ${({ gridArea = "" }) => gridArea};
  grid-column: ${({ gridColumn = "" }) => gridColumn};
  overflow: ${({ overflow = OVERVFLOW.VISIBLE }) => overflow};
`;
