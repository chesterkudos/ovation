import styled from "@emotion/styled";
import { H2, PrimaryButton } from "@kudos/kudos-styled";
import Head from "next/head";
import { KudosLink } from "../../components/KudosLink";

const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  gap: 1rem;
  background-color: #e2e2e2;
  width: 100%;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 0;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
`;

const LoginIndex = () => (
  <>
    <Head>
      <title>Kudos Login</title>
    </Head>
    <LoginContainer>
      <H2>Login</H2>
      <KudosLink href="./">Go To Homepage</KudosLink>
      <InputContainer>
        <span>username</span>
        <Input type="text" placeholder="enter email" />
      </InputContainer>
      <InputContainer>
        <span>email</span>
        <Input type="password" placeholder="enter password" />
      </InputContainer>

      <PrimaryButton>Login</PrimaryButton>
    </LoginContainer>
  </>
);

export default LoginIndex;
