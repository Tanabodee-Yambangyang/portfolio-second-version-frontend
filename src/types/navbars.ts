export interface NavBarPropsInterface {
  isDarkTheme: boolean;
  handleSwitchTheme: () => void;
}

export interface DesktopNavBarPropsInterface extends NavBarPropsInterface {
  onNavItemClick: (section: string) => void;
}