import "../app/styles/globals.scss";
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";
import { MetaHead } from "../app/components/meta-head";
import { theme } from "../app/styles/theme";
import { ChakraProvider, Progress } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { createNetworkStatusNotifier } from "react-apollo-network-status";

const { link, useApolloNetworkStatus } = createNetworkStatusNotifier();

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
  link: link.concat(createHttpLink({ uri: "/api/graphql" })),
});

function MyApp({ Component, pageProps }: AppProps) {
  const status = useApolloNetworkStatus();
  const isLoading =
    status.numPendingMutations > 0 || status.numPendingQueries > 0;

  return (
    <>
      <MetaHead />
      <UserProvider>
        <ApolloProvider client={client}>
          <ChakraProvider theme={theme}>
            <Progress
              bg="transparent"
              size="sm"
              colorScheme="pink"
              isIndeterminate={isLoading}
            />
            <Component {...pageProps} />
          </ChakraProvider>
        </ApolloProvider>
      </UserProvider>
    </>
  );
}
export default MyApp;
