import styled from "@emotion/styled";

export type ReactComponentsProps = {
  children: React.ReactNode;
};

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #ea8810;
  padding: 1rem;
`;

export function Header({ children }: ReactComponentsProps) {
  return <HeaderContainer>{children}</HeaderContainer>;
}

export default Header;
