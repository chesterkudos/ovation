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
  padding: 1rem;
  width: 1000%;
  background-color: #0f588b;
  color: #ffffff;
`;

export const Header = ({ children, spacing = "1rem" }: HeaderProps) => (
  <HeaderContainer spacing={spacing}>{children}</HeaderContainer>
);

export default Header;
