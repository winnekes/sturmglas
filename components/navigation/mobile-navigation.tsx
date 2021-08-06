import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Collapse,
  Flex,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { padding } from "../../styles/theme";
import { Logo } from "../logo";
import { MobileMenu } from "./mobile-menu";
import { navigationItems } from "./navigation";

export const MobileNavigation = () => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <Flex
        display={{ base: "flex", md: "none" }}
        align="center"
        justify="space-between"
        px={padding}
      >
        <Logo size="64px" />
        <Flex align="center" justify="space-between">
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon boxSize={6} /> : <HamburgerIcon boxSize={6} />
            }
            justifyContent="flex-end"
            variant="link"
            aria-label="Toggle Navigation"
          />
        </Flex>
      </Flex>
      <MobileMenu finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
