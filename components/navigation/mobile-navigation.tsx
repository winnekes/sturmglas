import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Collapse,
  Flex,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { navigationItems } from "./navigation";

export const MobileNavigation = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        display={{ base: "flex", md: "none" }}
        align="center"
        justify="space-between"
        p={2}
      >
        <Flex align="center" justify="space-between">
          <IconButton
            ml={5}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon boxSize={6} /> : <HamburgerIcon boxSize={6} />
            }
            variant="link"
            aria-label="Toggle Navigation"
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg="white"
          p={4}
          spacing={7}
          display={{ md: "none" }}
          textAlign="right"
        >
          {navigationItems.map((navItem) => (
            <Text fontWeight={600} key={navItem.label} color="gray.600">
              {navItem.label}
            </Text>
          ))}
        </Stack>
      </Collapse>
    </>
  );
};
