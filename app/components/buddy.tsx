import {
  Image,
  VStack,
  Text,
  Circle,
  HStack,
  Box,
  Divider,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useLatestMoodQuery } from "../types/graphql";
import { Panel } from "./panel";
import { Splash } from "./splash";
import { Subheading } from "./text/subheading";

type Props = {
  size: string;
};

export const Buddy: FunctionComponent<Props> = ({ size }) => {
  const { data, error, loading } = useLatestMoodQuery();

  // TODO Generic component
  if (loading) {
    return <Splash />;
  }

  if (error || !data) {
    return <>Error</>;
  }

  return (
    <>
      <VStack>
        <Image src="/logo.png" boxSize="200px" />

        {data.latestMood && (
          <>
            <Subheading>SRIRAM IS A MONKEY</Subheading>
            <Text>{data.latestMood.emotion}</Text>
            <Text>{data.latestMood.description}</Text>
          </>
        )}

        {!data.latestMood && <>start recording</>}

        {/*<HStack>*/}
        {/*  <Box>Longest streak</Box>*/}
        {/*  <Box>What do you want to achieve today?</Box>*/}
        {/*  <Box>Goals</Box>*/}
        {/*</HStack>*/}
      </VStack>
    </>
  );
};
