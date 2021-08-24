import { ArrowRightIcon } from "@chakra-ui/icons";
import Head from "next/head";
import { FunctionComponent, useRef } from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { colors, spacing, width } from "../styles/theme";
import { DesktopNavigation } from "./navigation/desktop-navigation";
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
      {!isDesktop ? (
        <MobilePageWrapper>{children}</MobilePageWrapper>
      ) : (
        <DesktopPageWrapper>{children}</DesktopPageWrapper>
      )}
    </>
  );
};

const DesktopPageWrapper: FunctionComponent = ({ children }) => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <DesktopNavigation />
      <Container maxW={width} py={[6, 0]}>
        {children}
      </Container>
    </>
  );
};

const MobilePageWrapper: FunctionComponent = ({ children }) => {
  return (
    <Box display={{ lg: "none" }}>
      <Container maxW={width} p={0}>
        <Box px={spacing}>{children}</Box>
        <MobileNavigation />
      </Container>
    </Box>
  );
};
