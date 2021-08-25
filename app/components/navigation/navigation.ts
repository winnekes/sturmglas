// TODO better naming/type
export const navigation = {
  root: "/",
  home: "/home",
  mood: "/mood",
};

export interface NavigationItem {
  label: string;
  href: string;
  type: "link" | "button";
}

export const authNavigationItems: NavigationItem[] = [
  {
    label: "Oasis",
    href: "/oasis",
    type: "link",
  },
  {
    label: "Logout",
    href: "/api/auth/logout",
    type: "link",
  },
];

export const openNavigationItems: NavigationItem[] = [
  {
    label: "Mentali",
    href: "/",
    type: "link",
  },
  {
    label: "Sign in",
    href: "/api/auth/login",
    type: "link",
  },
];
