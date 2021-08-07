import { Container, Flex, Stack, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { width } from "../../styles/theme";
import { Buddy } from "../buddy";
import { navigationItems } from "./navigation";

export const DesktopNavigation = () => {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      minH="60px"
      py={{ base: 2 }}
      //px={{ base: 4 }}
      align="center"
      justify="flex-end"
    >
      <Flex ml={10} py={5} display={{ base: "none", md: "flex" }}>
        <Stack direction="row" spacing={4}>
          {navigationItems.map((navItem) => (
            <NextLink key={navItem.label} href={navItem.href} passHref>
              <Link fontWeight={500} fontSize="xl" textTransform="uppercase">
                {navItem.label}
              </Link>
            </NextLink>
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
};
