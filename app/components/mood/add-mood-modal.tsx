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
  ModalCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { BiAngry, BiHappy, BiMeh, BiSad, BiSleepy } from "react-icons/bi";
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
  const modalSize = useBreakpointValue({ base: "full", lg: "md" });

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
        onClose();
      } catch (e) {
        console.log(e);
      }
    }
  };

  // TODO: find better icon assets
  return (
    <Modal onClose={onClose} isOpen isCentered size={modalSize}>
      <ModalOverlay />
      <ModalContent bg="gray.800">
        <ModalHeader>How are you feeling right now?</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <HStack justify="space-between">
            <VStack>
              <Icon
                as={BiHappy}
                boxSize="42px"
                onClick={() => setEmotion(Emotion.Happy)}
                color={emotion === Emotion.Happy ? colors.brand01 : "white"}
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
                color={emotion === Emotion.Anxious ? colors.brand01 : "white"}
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
                color={emotion === Emotion.Sad ? colors.brand01 : "white"}
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
                color={emotion === Emotion.Tired ? colors.brand01 : "white"}
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
                color={emotion === Emotion.Angry ? colors.brand01 : "white"}
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
          <Button onClick={addMood} variant="primary">
            Record
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
