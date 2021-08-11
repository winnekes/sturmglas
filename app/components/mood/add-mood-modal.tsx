import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FunctionComponent } from "react";

type Props = {
  onClose: () => void;
};

export const AddMoodModal: FunctionComponent<Props> = ({ onClose }) => {
  return (
    <Modal onClose={onClose} isOpen isCentered>
      <ModalOverlay />
      <ModalContent pb={5}>
        <ModalHeader>How are you feeling right now?</ModalHeader>

        <ModalBody>test</ModalBody>
      </ModalContent>
    </Modal>
  );
};
