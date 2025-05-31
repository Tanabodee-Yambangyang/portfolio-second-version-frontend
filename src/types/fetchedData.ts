export interface Contact {
  facebook: string;
  linkedin: string;
  github: string;
  email: string;
}

export interface Education {
  id: string;
  degrees: string;
  faculty: string;
  major: string;
  university: string;
  period: string;
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  duration: string;
  description: string;
  technologies: string[];
  github: string;
  responsibilities: string[];
}

export interface Experience {
  id: number;
  slug: string;
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export interface Skills {
  programming_languages: string[];
  web_development: string[];
  tools_platforms: string[];
  methodologies: string[];
  soft_skills: string[];
  languages: string[];
}

export interface Profile {
  first_name: string;
  last_name: string;
  address: string;
  contact: Contact;
  introduction: string;
  education: Education[];
  projects: Project[];
  experiences: Experience[];
  skills: Skills;
}