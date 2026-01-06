export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoLink?: string;
  liveLink?: string;
  image: string;
  year?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeUrl: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  years: string;
  description: string;

}

export interface SkillCategory {
  category: string;
  items: string[];
}