import { IconType } from "react-icons";
import { BiNetworkChart, BiHome, BiLogIn, BiLogOut, BiSpa, BiCog } from "react-icons/bi";

export const PAGES = {
  root: "/",
  oasis: "/oasis",
  insights: "/insights",
  settings: "/settings",
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
    href: PAGES.oasis,
    type: "link",
  },
  {
    label: "Insights",
    icon: BiNetworkChart,
    href: PAGES.insights,
    type: "link",
  },
  {
    label: "Settings",
    icon: BiCog,
    href: PAGES.settings,
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
    href: PAGES.root,
    type: "link",
  },
  {
    label: "Sign in",
    icon: BiLogIn,
    href: "/api/auth/login",
    type: "link",
  },
];
