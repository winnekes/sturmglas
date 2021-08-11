import { AddIcon } from "@chakra-ui/icons";
import { ComponentWithAs, IconProps } from "@chakra-ui/react";
import { Emotion } from "./graphql";

// TODO get proper icons
type Emotions = {
  [key in Emotion]: {
    icon: ComponentWithAs<"svg", IconProps>;
    name: string;
  };
};
export const emotions: Emotions = {
  ANXIOUS: { icon: AddIcon, name: "anxious" },
  HAPPY: { icon: AddIcon, name: "happy" },
  SAD: { icon: AddIcon, name: "sad" },
  ANGRY: { icon: AddIcon, name: "angry" },
};
