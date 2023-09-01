import styled from "@emotion/styled";
import { Header } from "@kudos/komponents";
import { H1 } from "@kudos/kudos-styled";
import { Location, Outlet, useLocation } from "react-router-dom";
import { DynamicNav } from "../components/Nav";

const MainAppContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 0;
  align-content: stretch;
  background-color: #ec0b0b;
  align-items: start;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  background-color: #1aff00;
`;

const Index = () => <p>This is the root level</p>;

export const Home = () => {
  const { pathname }: Location = useLocation();

  return (
    <>
      <Header spacing="2rem">
        <H1 color="#ffffff">Kudos React App</H1>
      </Header>
      <MainAppContainer>
        <DynamicNav />
        <Main>{pathname === "/" ? <Index /> : <Outlet />}</Main>
      </MainAppContainer>
    </>
  );
};

export default Home;
