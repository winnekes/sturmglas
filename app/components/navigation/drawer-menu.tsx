import { useUser } from "@auth0/nextjs-auth0";
import {
  Stack,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MutableRefObject } from "react";
import { useTimeOfDay } from "../../hooks/use-time-of-day";
import { colors } from "../../styles/theme";

import { authNavigationItems, openNavigationItems } from "./navigation";
import Link from "next/link";

type Props = {
  finalFocusRef: MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};

// todo show empty buddy
export const DrawerMenu = ({ finalFocusRef, isOpen, onClose }: Props) => {
  const { greeting } = useTimeOfDay();
  const drawerSize = useBreakpointValue({ base: "xs", lg: "lg" });
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
              <Link key={navItem.label} href={navItem.href} passHref>
                <ChakraLink fontSize="xl">{navItem.label}</ChakraLink>
              </Link>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
