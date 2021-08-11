import { AddIcon } from "@chakra-ui/icons";
import { Action, Fab } from "react-tiny-fab";
import { colors } from "../styles/theme";

export const FloatingAction = () => {
  return (
    <Fab
      icon={<AddIcon />}
      event={"hover"}
      text="test"
      alwaysShowTitle={true}
      onClick={() => {}}
      mainButtonStyles={{ backgroundColor: colors.ui.background02 }}
    >
      <Action
        text="How do you feel today?"
        onClick={() => {}}
        style={{ backgroundColor: colors.ui.background02 }}
      />
    </Fab>
  );
};
