import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Fab } from "react-tiny-fab";
import { colors } from "../styles/theme";
import { AddMoodModal } from "./mood/add-mood-modal";

export const FloatingAction = () => {
  const [showAddMoodModal, setShowAddMoodModal] = useState(false);

  return (
    <>
      <Fab
        icon={<AddIcon />}
        event={"hover"}
        text="Check In"
        alwaysShowTitle={false}
        onClick={() => setShowAddMoodModal(true)}
        mainButtonStyles={{ backgroundColor: colors.ui.background02 }}
      />
      {showAddMoodModal && (
        <AddMoodModal onClose={() => setShowAddMoodModal(false)} />
      )}
    </>
  );
};
