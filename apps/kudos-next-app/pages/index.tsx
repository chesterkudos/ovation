import styled from "@emotion/styled";
import { H2 } from "@kudos/kudos-styled";
import { KudosLink } from "../components/KudosLink";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
`;

export const Index = () => (
  <HomeContainer>
    <H2>Homepage</H2>
    <KudosLink href="./login">Login</KudosLink>
    <KudosLink href="./dashboard">Dashboard</KudosLink>
  </HomeContainer>
);

export default Index;
