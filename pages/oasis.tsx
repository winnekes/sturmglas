import { Heading, Text } from "@chakra-ui/react";
import { Buddy } from "../app/components/buddy";
import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useMoodsQueryQuery } from "../graphql";

export default function Oasis() {
  const { data, error, loading } = useMoodsQueryQuery();

  console.log({ data, error, loading });
  return (
    <PageWrapper>
      <Buddy size="130px" />
      <Panel>
        <Heading as="h1">Oasis</Heading>
        <Text>
          Make self-care a priority with InnerHour Find the strength, skills, &
          resources to overcome de
        </Text>
        <Text>
          Make self-care a priority with InnerHour Find the strength, skills, &
          resources to overcome de
        </Text>
      </Panel>
    </PageWrapper>
  );
}
