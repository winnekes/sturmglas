import { useUser } from "@auth0/nextjs-auth0";
import { Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Buddy } from "../app/components/buddy";
import { AddMoodModal } from "../app/components/mood/add-mood-modal";
import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useTimeOfDay } from "../app/hooks/use-time-of-day";
import { useMoodsQuery } from "../app/types/graphql";

export default function Oasis() {
  const [showAddMoodModal, setShowAddMoodModal] = useState(false);
  const { user, isLoading } = useUser();
  const { greeting } = useTimeOfDay();
  const { data, error, loading } = useMoodsQuery();

  if (isLoading || loading) {
    return <>Loading</>;
  }

  if (error || !data || !user) {
    return <>Error</>;
  }

  return (
    <PageWrapper>
      <Buddy size="130px" />
      <Panel>
        <Heading as="h1">
          {greeting}, {user.name?.split(" ")[0]}
        </Heading>
        <Heading as="h3">How are you feeling today?</Heading>

        {data.moods.map(mood => (
          <Text color="black" key={mood.id}>
            {mood.emotion}
          </Text>
        ))}
      </Panel>

      <Button onClick={() => setShowAddMoodModal(true)} />
      {showAddMoodModal && (
        <AddMoodModal onClose={() => setShowAddMoodModal(false)} />
      )}
    </PageWrapper>
  );
}
