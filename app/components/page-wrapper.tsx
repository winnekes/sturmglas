import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { FunctionComponent, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { colors, padding, width } from "../styles/theme";
import { DesktopNavigation } from "./navigation/desktop-navigation";
import { DrawerMenu } from "./navigation/drawer-menu";
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
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <Grid
        h="100%"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(24, 1fr)"
        gap={0}
      >
        <GridItem
          bg={colors.ui.background02}
          position="relative"
          top="-10px"
          boxShadow="3px 0px 5px rgba(0, 0, 0, .1)"
        >
          {!isOpen && (
            <IconButton
              icon={<ArrowRightIcon />}
              position="absolute"
              top="30px"
              right="-20px"
              borderRadius="100%"
              colorScheme="red"
              onClick={onOpen}
              aria-label="Toggle navigation"
            />
          )}
        </GridItem>
        <GridItem colSpan={23} maxHeight="100%">
          <Container maxW={width} py={[6, 0]}>
            {children}
          </Container>
        </GridItem>
      </Grid>
      <DrawerMenu
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        onToggle={onToggle}
      />
    </>
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
