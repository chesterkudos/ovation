import styled from "@emotion/styled";

import NxWelcome from "./nx-welcome";
import { Header } from "@kudos/react-components";

const MainAppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  background-color: #cedcd1;
  align-content: stretch;
`;

const NavContainer = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  background-color: #10e53e;
  align-content: stretch;
`;

const NavLink = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  background-color: #c3275b;
  align-content: stretch;
  color: #fff;
`;

const Nav = () => (
  <NavContainer>
    <NavLink>Home</NavLink>
    <NavLink>Me</NavLink>
    <NavLink>People</NavLink>
    <NavLink>Our Culture</NavLink>
  </NavContainer>
);

export function App() {
  return (
    <MainAppContainer>
      <Header>
        <Nav />
      </Header>
      <NxWelcome title="kudos web-app" />
    </MainAppContainer>
  );
}

export default App;
