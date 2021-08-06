import "../styles/globals.scss";
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";
import { MetaHead } from "../components/meta-head";
import { Navbar } from "../components/navigation/navbar";
import { theme, width } from "../styles/theme";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaHead />
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Container maxW={width} p={0} pt={5}>
            <Navbar />
            <Component {...pageProps} />
          </Container>
        </ChakraProvider>
      </UserProvider>
    </>
  );
}
export default MyApp;
