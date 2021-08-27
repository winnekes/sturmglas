// TODO better naming/type
import { IconType } from "react-icons";
import { BiNetworkChart, BiHome, BiLogIn, BiLogOut, BiSpa, BiCog } from "react-icons/all";

export const navigation = {
  root: "/",
  oasis: "/oasis",
  mood: "/mood",
};

export interface NavigationItem {
  label: string;
  icon: IconType;
  href: string;
  type: "link" | "button";
}

export const authNavigationItems: NavigationItem[] = [
  {
    label: "Oasis",
    icon: BiSpa,
    href: "/oasis",
    type: "link",
  },
  {
    label: "Insights",
    icon: BiNetworkChart,
    href: "/insights",
    type: "link",
  },
  {
    label: "Settings",
    icon: BiCog,
    href: "/settings",
    type: "link",
  },
  {
    label: "Logout",
    icon: BiLogOut,
    href: "/api/auth/logout",
    type: "link",
  },
];

export const openNavigationItems: NavigationItem[] = [
  {
    label: "Home",
    icon: BiHome,
    href: "/",
    type: "link",
  },
  {
    label: "Sign in",
    icon: BiLogIn,
    href: "/api/auth/login",
    type: "link",
  },
];
