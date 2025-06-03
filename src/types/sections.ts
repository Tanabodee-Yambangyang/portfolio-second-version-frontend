import { Skills, Education, Experience, Project } from "./fetchedData";

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
  educationData: Education[] | null | undefined;
};

export type SkillsSectionProps = IntroductionSectionProps & {
  skills: Skills | null | undefined;
  // additional props for AboutMeSection here if needed in the future
};

export type EducationCardProps = IntroductionSectionProps & {
  key: string;
  id: string;
  educationData: Education;
};

export type ExperiencesSectionProps = IntroductionSectionProps & {
  experienceData: Experience[] | null | undefined;
}

export type ExperienceCardProps = {
  experience: Experience;
}

export type ProjectsSectionProps = IntroductionSectionProps & {
  projectData: Project[] | null | undefined;
}

export type ProjectCardProps = {
  project: Project;
}