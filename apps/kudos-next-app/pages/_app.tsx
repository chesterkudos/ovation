import { CenteredContainer, H1 } from "@kudos/kudos-styled";
import { AppProps } from "next/app";
import Head from "next/head";

// global styles
import "./styles.css";

const AppIndex = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Kudos Homepage</title>
    </Head>
    <CenteredContainer>
      <H1>Kudos</H1>
      <Component {...pageProps} />
    </CenteredContainer>
  </>
);

export default AppIndex;
