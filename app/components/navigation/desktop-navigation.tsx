import { Icon, useDisclosure, Flex, IconButton, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { spacing } from "../../styles/theme";
import { DrawerMenu } from "./drawer-menu";

export const DesktopNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Flex justify="space-between" align="center" py={spacing}>
        <Text justifySelf="flex-start">mentali</Text>
        <IconButton
          justifySelf="flex-end"
          icon={<Icon as={BiMenu} boxSize="32px" />}
          aria-label={"Open menu"}
          variant="ghost"
          onClick={onOpen}
        />
      </Flex>
      {isOpen && (
        <DrawerMenu finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};
