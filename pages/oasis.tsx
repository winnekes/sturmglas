import { Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Buddy } from "../app/components/buddy";
import { AddMoodModal } from "../app/components/mood/add-mood-modal";
import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useMoodsQueryQuery } from "../app/types/graphql";

export default function Oasis() {
  const [showAddMoodModal, setShowAddMoodModal] = useState(false);
  const { data, error, loading } = useMoodsQueryQuery();

  console.log({ data, error, loading });
  return (
    <PageWrapper>
      <Buddy size="130px" />
      <Panel>
        <Heading as="h1">Oasis</Heading>
        <Text></Text>
      </Panel>
      <Button onClick={() => setShowAddMoodModal(true)} />
      {showAddMoodModal && (
        <AddMoodModal onClose={() => setShowAddMoodModal(false)} />
      )}
    </PageWrapper>
  );
}
