import { ArrowRightIcon } from "@chakra-ui/icons";
import Head from "next/head";
import { FunctionComponent, useRef } from "react";
import {
  Box,
  Container,
  Flex,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { colors, padding, width } from "../styles/theme";
import { DrawerMenu } from "./navigation/drawer-menu";
import { MobileNavigation } from "./navigation/mobile-navigation";

type Props = {
  title?: string;
};

export const PageWrapper: FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 62em)");
  return (
    <>
      <Head>
        <title>mentali {props.title}</title>
        <meta name="description" content="mentali" />
      </Head>
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
      {!isOpen && (
        <IconButton
          icon={<ArrowRightIcon />}
          position="fixed"
          top="20px"
          left="30px"
          borderRadius="100%"
          colorScheme="blue"
          onClick={onOpen}
          aria-label="Toggle navigation"
        />
      )}
      <Flex>
        <Box
          bg={colors.ui.background02}
          boxShadow="3px 0px 5px rgba(0, 0, 0, .1)"
          width="50px"
          minHeight="100vh"
        />

        <Container maxW={width} py={[6, 0]}>
          {children}
        </Container>
      </Flex>
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
