import "../styles/globals.scss";
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";
import { MetaHead } from "../components/meta-head";
import { Navbar } from "../components/navigation/navbar";
import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaHead />
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
