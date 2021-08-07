import { useRouter } from "next/router";
import { FunctionComponent } from "react";

import { Container } from "@chakra-ui/react";

import { width } from "../styles/theme";
import { FloatingAction } from "./floating-action";
import { Navbar } from "./navigation/navbar";

interface Props {
  isProtectedPage?: boolean;
}

export const PageWrapper: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();

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
