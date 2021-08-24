import { useUser } from "@auth0/nextjs-auth0";
import {
  Icon,
  useDisclosure,
  Flex,
  Container,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useTimeOfDay } from "../../hooks/use-time-of-day";
import { spacing, width } from "../../styles/theme";
import { DrawerMenu } from "./drawer-menu";
import { authNavigationItems, openNavigationItems } from "./navigation";

export const DesktopNavigation = () => {
  const { user, isLoading } = useUser();
  const [showAddMoodModal, setShowAddMoodModal] = useState(false);
  const { greeting } = useTimeOfDay();
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const navigationItems =
    user && !isLoading ? authNavigationItems : openNavigationItems;

  return (
    <Container maxWidth={width} mt={spacing}>
      <Flex justify="space-between" align="center">
        <Text>mentali</Text>
        <IconButton
          icon={<Icon as={BiMenu} boxSize="32px" />}
          aria-label={"Open menu"}
          variant="ghost"
          onClick={onOpen}
        />
      </Flex>
      <DrawerMenu finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};
