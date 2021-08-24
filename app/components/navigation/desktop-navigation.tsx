import { useUser } from "@auth0/nextjs-auth0";
import { Stack, Link, Box } from "@chakra-ui/react";
import { useTimeOfDay } from "../../hooks/use-time-of-day";
import { colors } from "../../styles/theme";
import { authNavigationItems, openNavigationItems } from "./navigation";

export const DesktopNavigation = () => {
  const { user, isLoading } = useUser();
  const { greeting } = useTimeOfDay();
  const navigationItems =
    user && !isLoading ? authNavigationItems : openNavigationItems;

  return (
    <Box bg={colors.ui.background02} h="100%">
      {greeting}
      {!isLoading && (user ? <>, {user.name?.split(" ")[0]}</> : <>!</>)}

      <Stack p={4} spacing={7}>
        {navigationItems.map(navItem => (
          <Link key={navItem.label} href={navItem.href} passHref>
            <Box fontWeight={600}>{navItem.label}</Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
