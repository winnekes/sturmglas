import { AddIcon } from "@chakra-ui/icons";
import { Action, Fab } from "react-tiny-fab";

export const FloatingAction = () => {
  return (
    <Fab
      icon={<AddIcon />}
      event={"hover"}
      alwaysShowTitle={true}
      onClick={() => {}}
    >
      <Action text="Email" onClick={() => {}} />
    </Fab>
  );
};
