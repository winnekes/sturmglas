import { useUser } from "@auth0/nextjs-auth0";
import { EditIcon } from "@chakra-ui/icons";
import {
  VStack,
  Text,
  Box,
  HStack,
  IconButton,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import { DateTime as time } from "luxon";
import { FunctionComponent, useRef } from "react";
import { MdBluetooth, MdBluetoothDisabled } from "react-icons/md";
import { useBluetooth } from "../hooks/use-bluetooth";
import { useLatestMoodQuery } from "../types/graphql";
import { emotions } from "../types/mood";
import { Loading } from "./loading";
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
    return <Loading />;
  }

  if (error || !data) {
    return <>Error</>;
  }

  return (
    <>
      <VStack>
        {data.latestMood && (
          <>
            {!bluetooth.state.connected ? (
              <IconButton
                icon={<MdBluetooth />}
                onClick={bluetooth.connect}
                variant="ghost"
              />
            ) : (
              <MdBluetoothDisabled onClick={bluetooth.disconnect} />
            )}
            {/*{bluetooth.deviceName && (*/}
            {/*  <Editable*/}
            {/*    defaultValue={bluetooth.deviceName}*/}
            {/*    maxWidth="300px"*/}
            {/*    submitOnBlur*/}
            {/*    onSubmit={async value => {*/}
            {/*      await bluetooth.changeName(value);*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <EditablePreview textAlign="center" />*/}
            {/*    <EditableInput textAlign="center" />*/}
            {/*  </Editable>*/}
            {/*)}*/}

            {bluetooth.state.connected && bluetooth.deviceName && (
              <Text>say hello to {bluetooth.deviceName}</Text>
            )}
            <Image
              src={emotions[data.latestMood.emotion].imageUrl}
              height={size}
              width={size}
              priority={true}
              quality={100}
            />

            <Box>
              <Subheading fontWeight="bold">Currently feeling</Subheading>
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
//   🌿 flora 🌿
