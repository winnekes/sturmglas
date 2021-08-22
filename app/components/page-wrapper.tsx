import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { useTimeOfDay } from "../hooks/use-time-of-day";
import { padding, width } from "../styles/theme";

import { DesktopNavigation } from "./navigation/desktop-navigation";
import { MobileNavigation } from "./navigation/mobile-navigation";

// TODO: useUserHook here so we don't have to call it in every component?
export const PageWrapper: FunctionComponent = ({ children }) => {
  const { user, isLoading } = useUser();
  const { greeting } = useTimeOfDay();
  const router = useRouter();

  return (
    <>
      <Container maxW={width} p={0} pt={5}>
        <DesktopNavigation />
        <Box px={padding}>{children}</Box>
        <MobileNavigation />
      </Container>{" "}
    </>
  );
};
