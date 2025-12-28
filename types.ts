
export interface Project {
  title: string;
  tech: string;
  github?: string;
  description: string[];
  impact?: string;
  team?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  location: string;
  period: string;
  degree: string;
  score: string;
}

export interface Achievement {
  title: string;
  value: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status?: string;
}
