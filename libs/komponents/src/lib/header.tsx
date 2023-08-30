import styled from "@emotion/styled";
import { ReactNode } from "react";

export type HeaderProps = {
  children: ReactNode;
  spacing?: string;
};

const HeaderContainer = styled.div<{ spacing?: string }>`
  display: grid;
  gap: ${({ spacing }) => spacing};
  grid-template-columns: 1fr;
  background-color: #ea8810;
  padding: 1rem;
`;

export const Header = ({ children, spacing = "1rem" }: HeaderProps) => (
  <HeaderContainer spacing={spacing}>{children}</HeaderContainer>
);

export default Header;