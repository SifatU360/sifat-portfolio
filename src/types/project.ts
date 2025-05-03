export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  demoUrl: string;
  githubUrl: string;
  serverUrl?: string;
  imageUrl: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  contributions?: {
    role: string;
    responsibilities: string[];
  };
}
