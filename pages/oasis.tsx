import { Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Buddy } from "../app/components/buddy";
import { FitnessLogin } from "../app/components/fitness-login";
import { AddMoodModal } from "../app/components/mood/add-mood-modal";
import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useMoodsQuery } from "../app/types/graphql";

export default function Oasis() {
  const [showAddMoodModal, setShowAddMoodModal] = useState(false);
  const { data, error, loading } = useMoodsQuery();

  if (loading) {
    return <>Loading</>;
  }

  if (error || !data) {
    return <>Error</>;
  }

  return (
    <PageWrapper>
      <Buddy size="130px" />
      <Panel>
        <Heading as="h1">Oasis</Heading>
        <FitnessLogin />
        {data.moods.map((mood) => (
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
