export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  serverUrl?: string;
  imageUrl: string;
  category: 'frontend' | 'backend' | 'fullstack';
  features: string[];
  challenges: string[];
  solutions: string[];
  contributions?: {
    role: string;
    responsibilities: string[];
  };
}
