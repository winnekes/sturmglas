import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { padding } from "../../styles/theme";
import { MobileMenu } from "./mobile-menu";

export const MobileNavigation = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Flex
        display={{ base: "flex", md: "none" }}
        align="center"
        justify="flex-end"
        px={padding}
      >
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon boxSize={6} /> : <HamburgerIcon boxSize={6} />
          }
          justifyContent="flex-end"
          variant="link"
          aria-label="Toggle navigation"
        />
      </Flex>
      <MobileMenu finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
