export type IntroductionSectionProps = {
  isDarkTheme: boolean;
  profile: {
    image: string;
    first_name: string;
    last_name: string;
    about_me: string;
    introduction: string;
  } | null | undefined;
};

export type AboutMeSectionProps = IntroductionSectionProps & {
  // additional props for AboutMeSection here if needed in the future
};