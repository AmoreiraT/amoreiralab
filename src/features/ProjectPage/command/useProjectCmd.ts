// useProjectActions.ts
import { useMutation, useQueryClient } from 'react-query';
import { useProjectStore } from '@features/ProjectPage/state/ProjectState';
import { Project } from '../types';
import * as projectFunctions from '../repo/projectRepository';

export const useProjectActions = () => {
  const queryClient = useQueryClient();
  const { addProject, setProjects, removeProject } = useProjectStore(
    (state) => ({
      addProject: state.addProject,
      setProjects: state.setProjects,
      removeProject: state.removeProject,
    })
  );

  // Hook para criar projeto
  const createProjectMutation = useMutation(
    (newProject: { data: Omit<Project, 'id'>; file?: File }) =>
      projectFunctions.createProject(newProject.data, newProject.file),
    {
      onSuccess: (project) => {
        addProject(project);
      },
    }
  );

  // Hook para atualizar projeto
  const updateProjectMutation = useMutation(
    ({ id, data }: { id: string; data: Partial<Project> }) =>
      projectFunctions.updateProject(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('projects');
      },
    }
  );

  // Hook para deletar projeto
  const deleteProjectMutation = useMutation(
    (projectId: string) => projectFunctions.deleteProject(projectId),
    {
      onSuccess: (_data, variables) => {
        removeProject(variables);
      },
    }
  );

  // Hook para buscar projetos
  const fetchProjects = async () => {
    const projects = await projectFunctions.getProjects();
    setProjects(projects);
  };

  return {
    createProjectMutation,
    updateProjectMutation,
    deleteProjectMutation,
    fetchProjects,
  };
};
