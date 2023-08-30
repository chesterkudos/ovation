import styled from "@emotion/styled";
import { H1 } from "@kudos/kudos-styled";
import { Header, UserCard } from "@kudos/react-components";

const MainAppContainer = styled.div`
  display: grid;
  grid-template-columns: 14rem 1fr;
  gap: 0;
  background-color: #cedcd1;
  align-content: stretch;
`;

const NavContainer = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  margin: 0;
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

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  background-color: #07c29c;
  align-content: stretch;
`;

const Nav = () => (
  <NavContainer>
    <NavLink>Home</NavLink>
    <NavLink>Me</NavLink>
    <NavLink>People</NavLink>
    <NavLink>Our Culture</NavLink>
  </NavContainer>
);

export const Index = () => (
  <MainAppContainer>
    <Header spacing="2rem">
      <Nav />
    </Header>
    <Main>
      <H1>Kudos React App</H1>
      <UserCard name="Chester Rivas" access="admin" />
    </Main>
  </MainAppContainer>
);

export default Index;
