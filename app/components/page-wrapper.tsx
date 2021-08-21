import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Container, Heading } from "@chakra-ui/react";
import { useTimeOfDay } from "../hooks/use-time-of-day";
import { width } from "../styles/theme";
import { FloatingAction } from "./floating-action";
import { Navbar } from "./navigation/navbar";

// TODO: useUserHook here so we don't have to call it in every component?
export const PageWrapper: FunctionComponent = ({ children }) => {
  const { user, isLoading } = useUser();
  const { greeting } = useTimeOfDay();
  const router = useRouter();

  return (
    <>
      <Container maxW={width} p={0} pt={5}>
        <Navbar />
        <Heading as="h1">
          {greeting}, {user?.name?.split(" ")[0]}
        </Heading>
        <Heading as="h3">How are you feeling today?</Heading>
        {children}
      </Container>{" "}
      {/*<FloatingAction />*/}
    </>
  );
};
