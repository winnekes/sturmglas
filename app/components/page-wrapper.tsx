import { FunctionComponent } from "react";
import { Box, Container, Heading, useMediaQuery } from "@chakra-ui/react";
import { spacing, width } from "../styles/theme";
import { DesktopNavigation } from "./navigation/desktop-navigation";
import { MobileNavigation } from "./navigation/mobile-navigation";
import { Subtitle, Title } from "./text/titles";

type Props = {
  pageTitle?: string;
  pageSubtitle?: string;
};

export const PageWrapper: FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return (
    <>
      <MobilePageWrapper {...props}>{children}</MobilePageWrapper>
      <DesktopPageWrapper {...props}>{children}</DesktopPageWrapper>
    </>
  );
};

const DesktopPageWrapper: FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return (
    <Box display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
      <Container maxW={width} py={[6, 0]}>
        <DesktopNavigation />
        <Box mx={spacing}>
          <Title>{props.pageTitle}</Title>
          <Subtitle>{props.pageSubtitle}</Subtitle>
        </Box>
        <Box my={spacing}>{children}</Box>
      </Container>
    </Box>
  );
};

const MobilePageWrapper: FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return (
    <Box display={{ base: "block", sm: "block", md: "block", lg: "none" }}>
      <Container maxW={width} px={spacing} pb={100}>
        <Box p={spacing}>
          <Title>{props.pageTitle}</Title>
          <Subtitle>{props.pageSubtitle}</Subtitle>
        </Box>

        {children}
      </Container>
      <MobileNavigation />
    </Box>
  );
};
