export type IntroductionSectionProps = {
  isDarkTheme: boolean;
  profile: {
    first_name: string;
    last_name: string;
    introduction: string;
  } | null | undefined;
};