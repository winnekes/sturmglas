import { Image, VStack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useLatestMoodQuery } from "../types/graphql";
import { Subheading } from "./text/subheading";

type Props = {
  size: string;
};

export const Buddy: FunctionComponent<Props> = ({ size }) => {
  const { data, error, loading } = useLatestMoodQuery();

  // TODO Generic component
  if (loading) {
    return <>Loading</>;
  }

  if (error || !data) {
    return <>Error</>;
  }
  console.log({ data });
  return (
    <VStack>
      <Image src="/logo.png" boxSize="200px" />
      <Subheading>currently</Subheading>
      <Text>{data.latestMood.emotion}</Text>
      <Text>{data.latestMood.description}</Text>
    </VStack>
  );
};
