import { Editable, EditableInput, EditablePreview, Text } from "@chakra-ui/react";
import { useBluetooth } from "../../hooks/use-bluetooth";

export const EditName = () => {
  const bluetooth = useBluetooth();
  return (
    <>
      <Text>Say hello to</Text>{" "}
      <Editable
        defaultValue={bluetooth.deviceName}
        maxWidth="300px"
        fontSize="xl"
        fontWeight="bold"
        submitOnBlur
        onSubmit={async value => {
          await bluetooth.changeName(value);
        }}
      >
        <EditablePreview textAlign="center" />
        <EditableInput textAlign="center" />
      </Editable>
    </>
  );
};
