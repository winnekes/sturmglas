import { AddIcon } from "@chakra-ui/icons";
import { ComponentWithAs, IconProps } from "@chakra-ui/react";
import { Emotion } from "./graphql";

// TODO get proper icons
type Emotions = {
  [key in Emotion]: {
    name: string;
    description: string;
    icon: ComponentWithAs<"svg", IconProps>;
  };
};
export const emotions: Emotions = {
  HAPPY: { name: "happy", description: "", icon: AddIcon },
  ANXIOUS: { name: "neutral", description: "", icon: AddIcon },
  TIRED: { name: "tired", description: "", icon: AddIcon },
  SAD: { name: "sad", description: "", icon: AddIcon },
  ANGRY: { name: "angry", description: "", icon: AddIcon },
};
