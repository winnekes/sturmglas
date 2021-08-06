import {
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
} from "@chakra-ui/modal";
import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { MutableRefObject } from "react";
import { colors } from "../../styles/theme";
import { Logo } from "../logo";
import { navigationItems } from "./navigation";

// TODO replace with user data
type Props = {
  finalFocusRef: MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};
export const MobileMenu = ({ finalFocusRef, isOpen, onClose }: Props) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent bg={colors.ui.background02} color="white">
        <DrawerHeader>Hello, -- name-- </DrawerHeader>

        <DrawerBody>
          <Center>
            <Logo size="64px" />
          </Center>
          <Stack p={4} spacing={7} display={{ md: "none" }}>
            {navigationItems.map((navItem) => (
              <Text fontWeight={600} key={navItem.label}>
                {navItem.label}
              </Text>
            ))}
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button>Logout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
