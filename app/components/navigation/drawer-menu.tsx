import { useUser } from "@auth0/nextjs-auth0";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { MutableRefObject } from "react";
import { useTimeOfDay } from "../../hooks/use-time-of-day";
import { colors } from "../../styles/theme";
import { authNavigationItems, openNavigationItems } from "./navigation";
import Link from "next/link";
import Image from "next/image";

type Props = {
  finalFocusRef: MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};

export const DrawerMenu = ({ finalFocusRef, isOpen, onClose }: Props) => {
  const { greeting } = useTimeOfDay();
  const [isDesktop] = useMediaQuery("(min-width: 62em)");
  const { user, isLoading } = useUser();

  const navigationItems =
    user && !isLoading ? authNavigationItems : openNavigationItems;

  return (
    <Drawer
      isOpen={isOpen}
      placement={isDesktop ? "right" : "left"}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size={isDesktop ? "lg" : "xs"}
    >
      <DrawerOverlay />
      <DrawerContent bg={colors.ui.background03} color="white">
        <DrawerHeader>
          {greeting} {!user && "!"}
          {user && <>, {user.name?.split(" ")[0]}</>}
        </DrawerHeader>
        <DrawerBody>
          <Stack p={4} spacing={7}>
            {navigationItems.map(navItem => (
              <Link key={navItem.label} href={navItem.href} passHref>
                <Box fontWeight={600} onClick={onClose}>
                  {navItem.label}
                </Box>
              </Link>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
