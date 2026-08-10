import { WORK_PROJECTS } from "@/data/work";
import { workPath } from "@/constants/routes";

export interface WorkItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  href: string;
}

/**
 * Featured Work cards on the home page — three sample portfolio projects.
 */
export const WORK_ITEMS: WorkItem[] = WORK_PROJECTS.map((project) => ({
  id: project.slug,
  category: project.category,
  title: project.title,
  description: project.description,
  imageSrc: project.imageSrc,
  tags: project.tags,
  href: workPath(project.slug),
}));
