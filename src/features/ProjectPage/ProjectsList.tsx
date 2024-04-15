// ProjectsList.tsx
import React, { useEffect } from 'react';
import { useProjectStore } from '@features/ProjectPage/state/ProjectState';
import { useProjectActions } from '@features/ProjectPage/command/useProjectCmd';
import { ProjectComponent } from '@features/ProjectPage/ProjectComponent';

export function ProjectsList() {
  const { fetchProjects } = useProjectActions();
  const projects = useProjectStore((state) => state.projects);

  useEffect(() => {
    const proj = async () => {
      const res = await fetchProjects();
      return res;
    };

    proj();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <ProjectComponent
          key={project.id}
          description={project.description}
          id={project.id}
          title={project.title}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
}
