interface Certification {
  title: string;
  url: string;
  date: string;
}

interface Contact {
  email: string;
  phone: string;
  name: string;
  position: string;
  location: string;
}

interface Education {
  position: string;
  company: string;
  city: string;
  period: string;
  responsibilities?: string[];
}

interface Game {
  title: string;
  icon: string;
}

interface Photography {
  path: string;
  width: number;
  height: number;
  url: string;
  alt: string;
  type: string;
}

interface Project {
  title: string;
  city: string;
  description: string;
  period: string;
  tools: string[];
  website?: string;
  repo: string;
}

interface Skill {
  name: string;
  level: number;
  priority: number;
}

interface Skills {
  professional: Skill[];
  languages: string[];
  developmentTools: string[];
  personal: string[];
}

interface SocialMediaLink {
  name: string;
  url: string;
}

interface TechnologyItem {
  key: string;
  name: string;
  icon: string;
}

interface Technologies {
  description: string;
  items: TechnologyItem[];
}

interface Experience {
  position: string;
  company: string;
  city: string;
  period: string;
  responsibilities: string[];
}

export interface IContent {
  certifications: Certification[];
  contact: Contact;
  education: Education[];
  games: Game[];
  photography: Photography[];
  introduction: string[];
  footer: string;
  homepage: { title: string };
  projects: Project[];
  skills: Skills;
  social: SocialMediaLink[];
  technologies: Technologies;
  experience: Experience[];
}
