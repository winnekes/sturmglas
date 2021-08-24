import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { BiHomeAlt, BiMenu, BiPlus, BiX } from "react-icons/bi";
import { colors, padding } from "../../styles/theme";
import { MobileMenu } from "./mobile-menu";
import { navigation } from "./navigation";

// TODO: hide navigation on scroll
export const MobileNavigation = () => {
  const router = useRouter();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Flex
        display={{ base: "flex", lg: "none" }}
        align="center"
        justify="space-between"
        px={padding}
        py={4}
        width="100%"
        bg="white"
        bottom={0}
        position="fixed"
        borderTopRadius="30px"
        color="gray"
        boxShadow="0px 0px 20px 3px rgba(0,0,0,.1)"
      >
        <IconButton
          aria-label={"Go home"}
          icon={<BiHomeAlt />}
          variant="ghost"
          size="lg"
          borderRadius="100%"
          onClick={() => router.push(navigation.root)}
        />
        <IconButton
          aria-label={"Record your mood"}
          icon={<BiPlus />}
          size="lg"
          borderRadius="100%"
          color="white"
          bg={colors.brand01}
        />
        <IconButton
          onClick={onToggle}
          icon={isOpen ? <BiX /> : <BiMenu />}
          variant="ghost"
          aria-label="Toggle navigation"
          borderRadius="100%"
          size="lg"
        />
      </Flex>
      <MobileMenu finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
