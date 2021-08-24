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
  onToggle: () => void;
};

export const DrawerMenu = ({
  finalFocusRef,
  isOpen,
  onClose,
  onToggle,
}: Props) => {
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
      size="xs"
    >
      <DrawerOverlay />
      <DrawerContent bg={colors.ui.background02} color="white">
        <IconButton
          icon={isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          position="absolute"
          right="-5"
          top="20px"
          borderRadius="100%"
          colorScheme="blue"
          onClick={onToggle}
          aria-label="Toggle navigation"
        />
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
