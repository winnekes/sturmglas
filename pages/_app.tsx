import "../app/styles/globals.scss";
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { MetaHead } from "../app/components/meta-head";
import { BluetoothContextProvider } from "../app/hooks/use-bluetooth";
import { theme } from "../app/styles/theme";
import { ChakraProvider, Progress } from "@chakra-ui/react";
import { useRouter } from "next/router";
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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const status = useApolloNetworkStatus();

  useEffect(() => {
    if (status.numPendingMutations > 0 || status.numPendingQueries > 0) {
      setIsLoading(true);
    }
    if (!status.numPendingMutations && !status.numPendingQueries) {
      setIsLoading(false);
    }

    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [status]);

  // TODO: colorScheme progressbar
  return (
    <>
      <MetaHead />
      <UserProvider>
        <ApolloProvider client={client}>
          <ChakraProvider theme={theme}>
            <Progress
              bg="transparent"
              size="sm"
              colorScheme="green"
              isIndeterminate={isLoading}
              value={0}
            />
            <BluetoothContextProvider>
              <Component {...pageProps} />
            </BluetoothContextProvider>
          </ChakraProvider>
        </ApolloProvider>
      </UserProvider>
    </>
  );
}
export default MyApp;
