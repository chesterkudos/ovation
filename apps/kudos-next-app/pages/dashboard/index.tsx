import styled from "@emotion/styled";
import { H2 } from "@kudos/kudos-styled";
import Head from "next/head";
import { KudosLink } from "../../components/KudosLink";

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
`;

const Dashboard = () => (
  <>
    <Head>
      <title>Kudos Login</title>
    </Head>
    <DashboardContainer>
      <H2>Dashboard</H2>
      <KudosLink href="./">Go To Homepage</KudosLink>
    </DashboardContainer>
  </>
);

export default Dashboard;
