import { useUser } from "@auth0/nextjs-auth0";
import {
  Stack,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
  Text,
  Link as ChakraLink,
  useBreakpointValue,
  Icon,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { MutableRefObject } from "react";
import { useTimeOfDay } from "../../hooks/use-time-of-day";
import { colors } from "../../styles/theme";
import { authNavigationItems, openNavigationItems } from "./PAGES";
import Link from "next/link";
import React from "react";

type Props = {
  finalFocusRef: MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};

// todo show empty buddy
export const DrawerMenu = ({ finalFocusRef, isOpen, onClose }: Props) => {
  const { greeting } = useTimeOfDay();
  const drawerSize = useBreakpointValue({ base: "xs", lg: "md" });
  const { user, isLoading } = useUser();

  const navigationItems = user && !isLoading ? authNavigationItems : openNavigationItems;

  return (
    <Drawer
      motionPreset="none"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size={drawerSize}
    >
      <DrawerOverlay />
      <DrawerContent bg={colors.ui.background03} color="white">
        <DrawerHeader>
          {greeting}
          {!user && " there!"}
          {user && <>, {user.name?.split(" ")[0]}</>}
        </DrawerHeader>
        <DrawerBody>
          <Stack p={4} spacing={7}>
            {navigationItems.map(navItem => (
              <React.Fragment key={navItem.label}>
                <Link href={navItem.href} passHref>
                  <ChakraLink fontSize="xl">
                    <HStack>
                      <Icon as={navItem.icon} />
                      <Text>{navItem.label}</Text>
                    </HStack>
                  </ChakraLink>
                </Link>
                <Divider />
              </React.Fragment>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
