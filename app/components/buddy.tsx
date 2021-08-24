import { VStack, Text, Box } from "@chakra-ui/react";
import { DateTime as time } from "luxon";
import { FunctionComponent, useRef } from "react";
import { useBluetooth } from "../hooks/use-bluetooth";
import { spacing } from "../styles/theme";
import { useLatestMoodQuery } from "../types/graphql";
import { emotions } from "../types/mood";
import { Subheading } from "./text/subheading";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
  size: string;
};

export const Buddy: FunctionComponent<Props> = ({ size }) => {
  const { data, error, loading, refetch } = useLatestMoodQuery();
  const bluetooth = useBluetooth();
  const btnRef = useRef<HTMLButtonElement>();

  useEffect(() => {
    refetch();
  }, []);

  // TODO Generic component
  if (loading) {
    return <>Loiading</>;
  }

  if (error || !data) {
    return <>Error</>;
  }

  console.log({ data });

  return (
    <>
      <VStack>
        {data.latestMood && (
          <>
            <Image
              src={emotions[data.latestMood.emotion].imageUrl}
              height={size}
              width={size}
              priority={true}
              quality={100}
            />

            {/*<Button onClick={bluetooth.connect}>Connect</Button>*/}

            <Box>
              <Subheading fontSize="sm" color="gray.600">
                {time
                  .fromISO(data.latestMood.date)
                  .toLocaleString(time.DATETIME_SHORT)}
              </Subheading>
              <Text fontWeight="bold" textTransform="capitalize">
                {emotions[data.latestMood.emotion].name}
              </Text>
              <Text>{data.latestMood.description}</Text>
            </Box>
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

// {bluetooth.state.connected && (
//   <button
//     onClick={async () => {
//       await bluetooth.changeName("sriram is a monkey");
//     }}
//   >
//     change name to bum and restart
//   </button>
// )}
