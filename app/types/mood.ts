import { AddIcon } from "@chakra-ui/icons";
import { ComponentWithAs, IconProps } from "@chakra-ui/react";
import { Emotion } from "./graphql";

// TODO get proper icons
type Emotions = {
  [key in Emotion]: {
    name: string;
    description: string;
    icon: ComponentWithAs<"svg", IconProps>;
    color: string;
  };
};
export const emotions: Emotions = {
  HAPPY: { name: "happy", description: "", icon: AddIcon, color: "green" },
  ANXIOUS: { name: "neutral", description: "", icon: AddIcon, color: "yellow" },
  TIRED: { name: "tired", description: "", icon: AddIcon, color: "grey" },
  SAD: { name: "sad", description: "", icon: AddIcon, color: "blue" },
  ANGRY: { name: "angry", description: "", icon: AddIcon, color: "red" },
};
