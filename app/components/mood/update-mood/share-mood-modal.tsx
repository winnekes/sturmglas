import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { forwardRef, FunctionComponent, useEffect, useRef } from "react";
import { MoodsQuery } from "../../../types/graphql";
import * as ExportImage from "react-component-export-image";

type Props = {
  mood: MoodsQuery["moods"][number];
  onClose: () => void;
};

export const ShareMoodModal: FunctionComponent<Props> = ({ mood, onClose }) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const EI = useRef<typeof ExportImage | undefined>();

  useEffect(() => {
    if (typeof window !== undefined) {
      import("react-component-export-image").then(module => (EI.current = module));
    }
  }, []);

  return (
    <Modal onClose={onClose} isOpen isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Share how you're feeling</ModalHeader>

        <ComponentToPrint ref={componentRef} />
        <ModalBody as={Flex} direction="column" justifyContent="center"></ModalBody>
        <ModalFooter>
          <Button onClick={onClose} variant="ghost">
            Cancel
          </Button>

          <Button
            onClick={() =>
              window &&
              EI.current?.exportComponentAsPNG(componentRef, {
                html2CanvasOptions: {
                  height: 100,
                  width: 100,
                },
              })
            }
            variant="primary"
          >
            Download as PNG
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const ComponentToPrint = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}>Heey!</div>;
});
