import { useUser } from "@auth0/nextjs-auth0";
import { Stack, Link, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useTimeOfDay } from "../../hooks/use-time-of-day";
import { colors } from "../../styles/theme";
import { AddMoodModal } from "../mood/add-mood-modal";
import { authNavigationItems, openNavigationItems } from "./navigation";

export const DesktopNavigation = () => {
  const { user, isLoading } = useUser();
  const [showAddMoodModal, setShowAddMoodModal] = useState(false);
  const { greeting } = useTimeOfDay();
  const navigationItems =
    user && !isLoading ? authNavigationItems : openNavigationItems;

  return (
    <>
      <Box bg={colors.ui.background02} h="100%">
        {greeting}
        {!isLoading && (user ? <>, {user.name?.split(" ")[0]}</> : <>!</>)}

        <Stack p={4} spacing={7}>
          {navigationItems.map(navItem => (
            <Link key={navItem.label} href={navItem.href} passHref>
              <Box fontWeight={600}>{navItem.label}</Box>
            </Link>
          ))}
          <Button
            w="100%"
            variant="outline"
            colorScheme="green"
            onClick={() => setShowAddMoodModal(true)}
          >
            How are you feeling right now? Record it
          </Button>
        </Stack>
      </Box>{" "}
      {showAddMoodModal && (
        <AddMoodModal onClose={() => setShowAddMoodModal(false)} />
      )}
    </>
  );
};
