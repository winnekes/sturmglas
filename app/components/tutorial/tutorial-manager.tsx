import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { useBluetooth } from "../../hooks/use-bluetooth";
import { MoodsDocument, MoodsQuery, useUpdateUserProfileMutation } from "../../types/graphql";
import { GetDeviceSettings } from "./get-device-settings";
import { GetUserDetails } from "./get-user-details";
import { InitialView } from "./initial-view";

type Props = {
  profile: MoodsQuery["profile"];
};

export const TutorialManager: FunctionComponent<Props> = ({ profile }) => {
  const [formStep, setFormStep] = useState(0);
  const [nickname, setNickname] = useState("");
  const [hasCompanion, setHasCompanion] = useState(false);
  const [hasGoogleFitness, setHasGoogleFitness] = useState(false);
  const [hasFinishedTutorial, setHasFinishedTutorial] = useState(false);

  const [mutate] = useUpdateUserProfileMutation({ refetchQueries: [MoodsDocument] });

  const updateProfile = async () => {
    try {
      await mutate({
        variables: {
          data: {
            nickname,
            settings: { hasCompanion, hasGoogleFitness, hasFinishedTutorial: true },
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const steps = [
    { title: "", content: <InitialView /> },
    {
      title: "",
      content: <GetUserDetails nickname={nickname} setNickname={setNickname} />,
    },
    {
      title: "",
      content: (
        <GetDeviceSettings
          profile={profile}
          hasCompanion={hasCompanion}
          setHasCompanion={setHasCompanion}
          hasGoogleFitness={hasGoogleFitness}
          setHasGoogleFitness={setHasGoogleFitness}
        />
      ),
    },
  ];

  const handleStepChange = (direction: "prev" | "next") => {
    const nextStep = formStep + (direction === "next" ? 1 : -1);
    if (steps[nextStep]) {
      setFormStep(nextStep);
    }
  };

  return (
    <Modal
      onClose={() => {}}
      isOpen
      isCentered
      size="xl"
      closeOnOverlayClick={false}
      closeOnEsc={false}
    >
      <ModalOverlay />
      <ModalContent minHeight="500px">
        <ModalHeader>{steps[formStep].title}</ModalHeader>

        <ModalBody as={Flex} direction="column" justifyContent="center">
          {steps[formStep].content}
        </ModalBody>
        <ModalFooter>
          {formStep > 0 && (
            <Button onClick={() => handleStepChange("prev")} variant="ghost">
              Take a step back
            </Button>
          )}
          {formStep < steps.length - 1 ? (
            <Button onClick={() => handleStepChange("next")} variant="primary">
              Continue
            </Button>
          ) : (
            <Button onClick={updateProfile} variant="primary">
              Let's go!
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
