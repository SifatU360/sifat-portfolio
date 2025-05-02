export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  imageUrl: string;
  category: 'frontend' | 'backend' | 'fullstack';
  features: string[];
  challenges: string[];
  solutions: string[];
}
