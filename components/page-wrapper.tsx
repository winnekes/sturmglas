import { useUser } from "@auth0/nextjs-auth0";
import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

import { Center, Container, Flex, Spacer } from "@chakra-ui/react";
import { Action, Fab } from "react-tiny-fab";
import { width } from "../styles/theme";
import { Buddy } from "./buddy";
import { FloatingAction } from "./floating-action";
import { Navbar } from "./navigation/navbar";
import { Splash } from "./splash";

interface Props {
  isProtectedPage?: boolean;
}

export const PageWrapper: FunctionComponent<Props> = ({
  children,
  isProtectedPage,
}) => {
  const { isLoading, user } = useUser();
  const router = useRouter();

  if (isLoading) {
    return <Splash />;
  }

  return (
    <>
      <Container maxW={width} p={0} pt={5}>
        <Navbar />
        {/*<Center>*/}
        {/*  <Buddy size="200px" />*/}
        {/*</Center>*/}
        {children}
      </Container>{" "}
      <FloatingAction />
    </>
  );
};
