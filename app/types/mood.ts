import { IconType } from "react-icons";
import { BiTired } from "react-icons/bi";
import { ImAngry, ImHappy, ImNeutral, ImSad } from "react-icons/im";
import { Emotion } from "./graphql";

// TODO get proper icons
type Emotions = {
  [key in Emotion]: {
    name: string;
    description: string;
    imageUrl: string;
    color: string;
  };
};
export const emotions: Emotions = {
  HAPPY: {
    name: "happy",
    description: "",
    imageUrl: "/logo.png",
    color: "#06d6a0",
  },
  ANXIOUS: {
    name: "anxious",
    description: "",
    imageUrl: "/faces/anxious.png",
    color: "#ffd166",
  },
  TIRED: {
    name: "tired",
    description: "",
    imageUrl: "/faces/tired.png",
    color: "#073b4c",
  },
  SAD: {
    name: "sad",
    description: "",
    imageUrl: "/faces/sad.png",
    color: "#118ab2",
  },
  ANGRY: {
    name: "angry",
    description: "",
    imageUrl: "/faces/angry.png",
    color: "#ef476f",
  },
};
