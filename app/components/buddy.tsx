import { VStack, Text, Button, Box } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useRef } from "react";
import { useBluetooth } from "../hooks/use-bluetooth";
import { colors } from "../styles/theme";
import { useLatestMoodQuery } from "../types/graphql";
import { Splash } from "./splash";
import { Subheading } from "./text/subheading";
import Image from "next/image";

type Props = {
  size: string;
};

export const Buddy: FunctionComponent<Props> = ({ size }) => {
  const { data, error, loading } = useLatestMoodQuery();
  const bluetooth = useBluetooth();
  const btnRef = useRef<HTMLButtonElement>();

  // TODO Generic component
  if (loading) {
    return <>Loiading</>;
  }

  if (error || !data) {
    return <>Error</>;
  }

  return (
    <>
      <VStack>
        <Image src="/logo.png" height="200px" width="200px" priority={true} />

        <Button onClick={bluetooth.connect}>Connect</Button>
        {data.latestMood && (
          <>
            {bluetooth.state.connected && (
              <button
                onClick={async () => {
                  await bluetooth.changeName("sriram is a monkey");
                }}
              >
                change name to bum and restart
              </button>
            )}
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
