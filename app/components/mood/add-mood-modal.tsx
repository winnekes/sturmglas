import {
  Button,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import {
  BiAngry,
  BiHappy,
  BiMeh,
  BiSad,
  BiSleepy,
  BiTired,
} from "react-icons/bi";

import { ImAngry, ImHappy, ImNeutral, ImSad } from "react-icons/im";
import { useBluetooth } from "../../hooks/use-bluetooth";
import { colors } from "../../styles/theme";
import { Emotion, useAddMoodMutation } from "../../types/graphql";
import { emotions } from "../../types/mood";
import { Subheading } from "../text/subheading";
import { Subtitle } from "../text/titles";

type Props = {
  onClose: () => void;
};

export const AddMoodModal: FunctionComponent<Props> = ({ onClose }) => {
  const [emotion, setEmotion] = useState<Emotion | null>(null);
  const [description, setDescription] = useState("");
  const bluetooth = useBluetooth();
  const [mutate] = useAddMoodMutation({
    // TODO: optimise (use update instead of refetchQueries to reduce api call from 2 to 1)
    refetchQueries: ["Moods", "LatestMood"],
  });

  const addMood = async () => {
    if (emotion) {
      try {
        await mutate({
          variables: {
            data: { emotion, date: new Date(), description },
          },
        });

        await bluetooth.changeFace(emotions[emotion].faceInHex);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // TODO: find better icon assets
  return (
    <Modal onClose={onClose} isOpen isCentered size="sm">
      <ModalOverlay />
      <ModalContent bg="gray.800">
        <ModalHeader>How are you feeling right now?</ModalHeader>

        <ModalBody>
          <HStack justify="space-between">
            <VStack>
              <Icon
                as={BiHappy}
                boxSize="42px"
                onClick={() => setEmotion(Emotion.Happy)}
                color={emotions[Emotion.Happy].color}
              />
              <Subheading fontWeight="bold" fontSize="sm">
                happy
              </Subheading>
            </VStack>
            <VStack>
              <Icon
                as={BiMeh}
                boxSize="42px"
                onClick={() => setEmotion(Emotion.Anxious)}
                color={emotions[Emotion.Anxious].color}
              />
              <Subheading fontWeight="bold" fontSize="sm">
                anxious
              </Subheading>
            </VStack>
            <VStack>
              <Icon
                as={BiSad}
                boxSize="42px"
                onClick={() => setEmotion(Emotion.Sad)}
                color={emotions[Emotion.Sad].color}
              />
              <Subheading fontWeight="bold" fontSize="sm">
                sad
              </Subheading>
            </VStack>
            <VStack>
              <Icon
                as={BiSleepy}
                boxSize="42px"
                onClick={() => setEmotion(Emotion.Tired)}
                color={emotions[Emotion.Tired].color}
              />
              <Subheading fontWeight="bold" fontSize="sm">
                tired
              </Subheading>
            </VStack>
            <VStack>
              <Icon
                as={BiAngry}
                boxSize="42px"
                onClick={() => setEmotion(Emotion.Angry)}
                color={emotions[Emotion.Angry].color}
              />
              <Subheading fontWeight="bold" fontSize="sm">
                angry
              </Subheading>
            </VStack>
          </HStack>

          <Subtitle fontSize="lg" my={10}>
            And why are you feeling this way?
          </Subtitle>
          <Textarea
            borderColor="gray.700"
            value={description}
            placeholder="Today, I ..."
            onChange={event => setDescription(event.target.value ?? "")}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={addMood} bg={colors.brand01}>
            Record
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
