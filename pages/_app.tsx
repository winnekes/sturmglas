import "../styles/globals.scss";
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}
export default MyApp;
