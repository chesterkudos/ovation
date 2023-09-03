import styled from "@emotion/styled";
import { Header, UserCard } from "@kudos/komponents";
import { H1 } from "@kudos/kudos-styled";
import { Outlet } from "react-router-dom";
import { DynamicNav } from "../components/nav";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  background-color: #07c29c;
  align-content: stretch;
`;

const MainAppContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 0;
  background-color: #cedcd1;
  align-content: stretch;
`;

export const Home = () => (
  <MainAppContainer>
    <Header spacing="2rem">
      <DynamicNav />
    </Header>
    <Main>
      <H1>Kudos React App</H1>
      <UserCard name="Chester Rivas" access="admin" />
      <Outlet />
    </Main>
  </MainAppContainer>
);

export default Home;
