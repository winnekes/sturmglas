import { Container, Flex, Stack, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { navigationItems } from "./navigation";

export const DesktopNavigation = () => {
  return (
    <VStack display={{ base: "none", md: "flex" }}>
      <Container
        as={Flex}
        maxW="7xl"
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
        justify="space-between"
        color="#808080"
      >
        <Flex ml={10} py={5} display={{ base: "none", md: "flex" }}>
          <Stack direction="row" spacing={4}>
            {navigationItems.map((navItem) => (
              <NextLink key={navItem.label} href={navItem.href} passHref>
                <Link
                  p={2}
                  fontWeight={500}
                  fontSize="xl"
                  textTransform="uppercase"
                >
                  {navItem.label}
                </Link>
              </NextLink>
            ))}
          </Stack>
        </Flex>
      </Container>
    </VStack>
  );
};
