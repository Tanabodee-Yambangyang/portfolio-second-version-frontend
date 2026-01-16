import { Ref } from "react";
import { Skills, Education, Experience, Project, Contact } from "./fetchedData";

export type IntroductionSectionProps = {
  isDarkTheme: boolean;
  profile: {
    cv: string;
    image: string;
    first_name: string;
    last_name: string;
    about_me: string;
    introduction: string;
  } | null | undefined;
  scrollTargetRef?: React.RefObject<HTMLDivElement | null>;
};

export type AboutMeSectionProps = IntroductionSectionProps & {
  educationData: Education[] | null | undefined;
  ref: Ref<HTMLDivElement> | undefined
  eduRef: Ref<HTMLDivElement> | undefined
};

export type SkillsSectionProps = IntroductionSectionProps & {
  skills: Skills | null | undefined;
  scrollRef: Ref<HTMLDivElement> | undefined
};

export type EducationCardProps = IntroductionSectionProps & {
  key: string;
  educationData: Education;
};

export type ExperiencesSectionProps = IntroductionSectionProps & {
  experienceData: Experience[] | null | undefined;
  ref: Ref<HTMLDivElement> | undefined
}

export type ExperienceCardProps = {
  experience: Experience;
  isDarkTheme: boolean;
}

export type ProjectsSectionProps = IntroductionSectionProps & {
  projectData: Project[] | null | undefined;
  ref: Ref<HTMLDivElement> | undefined
}

export type ProjectCardProps = {
  project: Project;
  isDarkTheme: boolean;
}

export type ContactSectionProps = IntroductionSectionProps & {
  contactData: Contact | null | undefined;
  ref: Ref<HTMLDivElement> | undefined
}