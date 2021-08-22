import { FunctionComponent } from "react";
import { Box, Container } from "@chakra-ui/react";
import { padding, width } from "../styles/theme";
import { DesktopNavigation } from "./navigation/desktop-navigation";
import { MobileNavigation } from "./navigation/mobile-navigation";

export const PageWrapper: FunctionComponent = ({ children }) => {
  return (
    <>
      <Container maxW={width} p={0}>
        <DesktopNavigation />
        <Box px={padding}>{children}</Box>
        <MobileNavigation />
      </Container>
    </>
  );
};
