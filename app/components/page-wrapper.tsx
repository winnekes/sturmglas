import { FunctionComponent } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { padding, width } from "../styles/theme";
import { DesktopNavigation } from "./navigation/desktop-navigation";
import { MobileNavigation } from "./navigation/mobile-navigation";

export const PageWrapper: FunctionComponent = ({ children }) => {
  const [isDesktop] = useMediaQuery("(min-width: 62em)");
  return (
    <>
      {!isDesktop && <MobilePageWrapper>{children}</MobilePageWrapper>}
      {isDesktop && <DesktopPageWrapper>{children}</DesktopPageWrapper>}
    </>
  );
};

const DesktopPageWrapper: FunctionComponent = ({ children }) => {
  return (
    <Grid
      h="100%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <DesktopNavigation />
      </GridItem>
      <GridItem rowSpan={2} colSpan={4}>
        <Container maxW={width} py={[6, 0]}>
          {children}
        </Container>
      </GridItem>
    </Grid>
  );
};

const MobilePageWrapper: FunctionComponent = ({ children }) => {
  return (
    <Box>
      <Container maxW={width} p={0}>
        <Box px={padding}>{children}</Box>
        <MobileNavigation />
      </Container>
    </Box>
  );
};
