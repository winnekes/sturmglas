import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Select } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {AddMoodInputType, Emotion} from "../../types/graphql";

type Props = {
  onClose: () => void;
};

export const AddMoodModal: FunctionComponent<Props> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddMoodInputType>();
  const onSubmit: SubmitHandler<AddMoodInputType> = (data) => console.log(data);

  console.log({
    test:    Object.values(Emotion)
    })
  return (
    <Modal onClose={onClose} isOpen isCentered>
      <ModalOverlay />
      <ModalContent pb={5}>
        <ModalHeader>How are you feeling right now?</ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
              <Select >}</Select>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
