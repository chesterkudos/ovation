import { AppProps } from "next/app";
import Head from "next/head";
import styled from "@emotion/styled";
import { H2 } from "@kudos/kudos-styled";
import Link from "next/link";

const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  gap: 1rem;
  background-color: #d37de1;
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

const LoginIndex = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Kudos Login</title>
      </Head>
      <LoginContainer>
        <H2>Homepage</H2>
        <Link href="./">Go To Homepage</Link>
        <InputContainer>
          <span>username</span>
          <Input type="text" placeholder="enter email" />
        </InputContainer>
        <InputContainer>
          <span>email</span>
          <Input type="password" placeholder="enter password" />
        </InputContainer>
      </LoginContainer>
    </>
  );
};

export default LoginIndex;
