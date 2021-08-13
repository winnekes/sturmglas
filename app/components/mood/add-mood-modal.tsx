import {
  Button,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { BiTired } from "react-icons/bi";

import { ImAngry, ImHappy, ImNeutral, ImSad } from "react-icons/im";
import { Emotion, useAddMoodMutation } from "../../types/graphql";

type Props = {
  onClose: () => void;
};

export const AddMoodModal: FunctionComponent<Props> = ({ onClose }) => {
  const [emotion, setEmotion] = useState<Emotion | null>(null);
  const [addMood] = useAddMoodMutation();

  // TODO: find better icon assets
  return (
    <Modal onClose={onClose} isOpen isCentered>
      <ModalOverlay />
      <ModalContent pb={5}>
        <ModalHeader>How are you feeling right now?</ModalHeader>

        <ModalBody>
          <HStack justify="space-between">
            <Icon
              as={ImHappy}
              boxSize="48px"
              onClick={() => setEmotion(Emotion.Happy)}
            />
            <Icon
              as={ImNeutral}
              boxSize="48px"
              onClick={() => setEmotion(Emotion.Neutral)}
            />
            <Icon
              as={ImSad}
              boxSize="48px"
              onClick={() => setEmotion(Emotion.Sad)}
            />
            <Icon
              as={BiTired}
              boxSize="48px"
              onClick={() => setEmotion(Emotion.Tired)}
            />
            <Icon
              as={ImAngry}
              boxSize="48px"
              onClick={() => setEmotion(Emotion.Angry)}
            />
          </HStack>
          <Button
            onClick={async () => {
              if (emotion) {
                await addMood({
                  variables: {
                    data: { emotion, date: new Date(), description: "" },
                  },
                });
              }
            }}
          >
            send
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
