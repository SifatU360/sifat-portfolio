import { projects } from "@/config/projects";
import ProjectDetails from "./ProjectDetails";
import { notFound } from "next/navigation";

// export const generateMetadata = async ({ params }: { params: { id: string } }) => {
//   const { id } = await params;
//   const project = projects.find(p => p.id === id);

//   if (!project) {
//     return {
//       title: "Project Not Found"
//     };
//   }

//   return {
//     title: `${project.title} | Project Details`,
//     description: project.description,
//   };
// };

export default async function ProjectPage({ params }: {params:Promise<{ id: string }>}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
