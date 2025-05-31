import { JSX } from "react";

interface ContactLink {
  href: string;
  label: string;
  icon: JSX.Element;
}

export interface NavBarPropsInterface {
  contactLinks: ContactLink[]; // <- not wrapped in an object
  isDarkTheme: boolean;
  handleSwitchTheme: () => void;
}