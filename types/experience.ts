export interface Supervisor {
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

export interface NotableProject {
  title: string;
  description: string;
  link?: string;
}

export interface Experience {
  slug: string;
  title: string;
  role: string;
  company: string;
  timeframe: string;
  location: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  summary: string;
  responsibilities: string[];
  keyAchievements: string[];
  techStack: string[];
  notableProjects: NotableProject[];
  suggestedImageAlt: string;
  relatedResumeSections: string[];
  missingFields: string[];
  supervisor?: Supervisor;
  content?: string;
}

export interface ContactFormData {
  email: string;
  question: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}
