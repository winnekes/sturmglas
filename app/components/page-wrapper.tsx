import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Container } from "@chakra-ui/react";
import { width } from "../styles/theme";
import { FloatingAction } from "./floating-action";
import { Navbar } from "./navigation/navbar";

// TODO: useUserHook here so we don't have to call it in every component?
export const PageWrapper: FunctionComponent = ({ children }) => {
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
