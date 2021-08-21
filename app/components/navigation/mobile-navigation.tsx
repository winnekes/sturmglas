import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { BiHomeAlt, BiMenu, BiPlus, BiX } from "react-icons/bi";
import { padding } from "../../styles/theme";
import { MobileMenu } from "./mobile-menu";

// TODO: hide navigation on scroll
export const MobileNavigation = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Flex
        display={{ base: "flex", md: "none" }}
        align="center"
        justify="space-between"
        px={padding}
        py={4}
        width="100%"
        bg="white"
        bottom={0}
        position="fixed"
        borderTopRadius="40px"
        color="gray"
        transition="transform 150ms ease-in-out"
        animation="translateY(-100%);"
        boxShadow="0px 0px 120px 3px rgba(0,0,0,.1)"
      >
        <IconButton
          aria-label={"Go home"}
          icon={<BiHomeAlt />}
          variant="ghost"
          size="lg"
        />
        <IconButton
          aria-label={"Record your mood"}
          icon={<BiPlus />}
          size="lg"
          borderRadius="100%"
          colorScheme="red"
        />
        <IconButton
          onClick={onToggle}
          icon={isOpen ? <BiX /> : <BiMenu />}
          variant="ghost"
          aria-label="Toggle navigation"
          size="lg"
        />
      </Flex>
      <MobileMenu finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
