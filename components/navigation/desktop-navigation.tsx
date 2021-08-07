import { useUser } from "@auth0/nextjs-auth0";
import { Flex, Stack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { padding } from "../../styles/theme";
import { authNavigationItems, openNavigationItems } from "./navigation";

export const DesktopNavigation = () => {
  const { user } = useUser();

  // to render cta button
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      minH="60px"
      py={{ base: 2 }}
      px={padding}
      align="center"
      justify="flex-end"
      color="white"
    >
      <Flex ml={10} py={5} display={{ base: "none", md: "flex" }}>
        <Stack direction="row" spacing={4}>
          {user ? (
            <>
              {authNavigationItems.map((navItem) => (
                <NextLink key={navItem.label} href={navItem.href} passHref>
                  <Link
                    fontWeight={500}
                    fontSize="xl"
                    textTransform="uppercase"
                    ml={1}
                  >
                    {navItem.label}
                  </Link>
                </NextLink>
              ))}
            </>
          ) : (
            <>
              {openNavigationItems.map((navItem) => (
                <NextLink key={navItem.label} href={navItem.href} passHref>
                  <Link
                    fontWeight={500}
                    fontSize="xl"
                    textTransform="uppercase"
                    ml={1}
                  >
                    {navItem.label}
                  </Link>
                </NextLink>
              ))}
            </>
          )}
        </Stack>
      </Flex>
    </Flex>
  );
};
