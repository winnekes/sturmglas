import { useUser } from "@auth0/nextjs-auth0";
import {
  Box,
  Stack,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
  useMediaQuery,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { MutableRefObject } from "react";
import { useTimeOfDay } from "../../hooks/use-time-of-day";
import { colors, spacing } from "../../styles/theme";
import { Buddy } from "../buddy";
import { authNavigationItems, openNavigationItems } from "./navigation";
import Link from "next/link";

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
          {greeting}
          {!user && " there!"}
          {user && <>, {user.name?.split(" ")[0]}</>}
        </DrawerHeader>
        <DrawerBody>
          {user && (
            <>
              <Buddy size="100px" />
              <Divider colorScheme="red" my={spacing} />
            </>
          )}

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

const MenuItem = () => {};
