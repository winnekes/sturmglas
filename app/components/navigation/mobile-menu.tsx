import { useUser } from "@auth0/nextjs-auth0";
import {
  Box,
  Stack,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
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

export const MobileMenu = ({ finalFocusRef, isOpen, onClose }: Props) => {
  const { greeting } = useTimeOfDay();
  const { user, isLoading } = useUser();

  const navigationItems =
    user && !isLoading ? authNavigationItems : openNavigationItems;

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent bg={colors.ui.background02} color="white">
        <DrawerHeader>
          {greeting}
          {!isLoading && (user ? <>, {user.name?.split(" ")[0]}</> : <>!</>)}
        </DrawerHeader>

        <DrawerBody>
          <Stack p={4} spacing={7} display={{ md: "none" }}>
            {navigationItems.map(navItem => (
              <Link key={navItem.label} href={navItem.href} passHref>
                <Box fontWeight={600}>{navItem.label}</Box>
              </Link>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
