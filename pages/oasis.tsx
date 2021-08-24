import { useUser } from "@auth0/nextjs-auth0";
import { Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Buddy } from "../app/components/buddy";
import { AddMoodModal } from "../app/components/mood/add-mood-modal";
import { MoodsTimeline } from "../app/components/mood/moods-timeline";
import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { Splash } from "../app/components/splash";
import { useTimeOfDay } from "../app/hooks/use-time-of-day";
import { useMoodsQuery } from "../app/types/graphql";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Oasis() {
  const [showAddMoodModal, setShowAddMoodModal] = useState(false);
  const { user, isLoading } = useUser();
  const { greeting } = useTimeOfDay();
  const { data, error, loading } = useMoodsQuery();

  if (isLoading || loading) {
    return <Splash />;
  }

  if (error || !data || !user) {
    return <>Error</>;
  }

  return (
    <>
      <PageWrapper>
        <Buddy size="130px" />
        <Panel mt={5}>
          <Button
            w="100%"
            variant="outline"
            colorScheme="green"
            onClick={() => setShowAddMoodModal(true)}
          >
            How are you feeling right now? Record it
          </Button>

          <MoodsTimeline moods={data.moods} />
        </Panel>
      </PageWrapper>
      {showAddMoodModal && (
        <AddMoodModal onClose={() => setShowAddMoodModal(false)} />
      )}
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
