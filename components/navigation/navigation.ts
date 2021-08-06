// TODO better naming/type
export const navigation = {
  root: "/",
  home: "/home",
  mood: "/mood",
};

export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Oasis",
    href: "/oasis",
  },
  {
    label: "Logout",
    href: "#",
  },
];
