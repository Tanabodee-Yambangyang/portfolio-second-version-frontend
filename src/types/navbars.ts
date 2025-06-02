import { JSX } from "react";

interface ContactLink {
  href: string;
  label: string;
  icon: JSX.Element;
}

export interface NavBarPropsInterface {
  isDarkTheme: boolean;
  handleSwitchTheme: () => void;
}