import "../styles/globals.scss";
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Navbar } from "../components/navigation/navbar";
import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </UserProvider>
    </>
  );
}
export default MyApp;
