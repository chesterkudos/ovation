import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";
import { H2 } from "@kudos/kudos-styled";
import Link from "next/link";

const AppIndex = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Kudos Homepage</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default AppIndex;
