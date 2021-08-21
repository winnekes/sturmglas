import { IconType } from "react-icons";
import { BiTired } from "react-icons/bi";
import { ImAngry, ImHappy, ImNeutral, ImSad } from "react-icons/im";
import { Emotion } from "./graphql";

// TODO get proper icons
type Emotions = {
  [key in Emotion]: {
    name: string;
    description: string;
    icon: IconType;
    color: string;
  };
};
export const emotions: Emotions = {
  HAPPY: { name: "happy", description: "", icon: ImHappy, color: "#CAFFBF" },
  ANXIOUS: {
    name: "anxious",
    description: "",
    icon: ImNeutral,
    color: "#FDFFB6",
  },
  TIRED: { name: "tired", description: "", icon: BiTired, color: "#d2d2cf" },
  SAD: { name: "sad", description: "", icon: ImSad, color: "#A0C4FF" },
  ANGRY: { name: "angry", description: "", icon: ImAngry, color: "#FFADAD" },
};
