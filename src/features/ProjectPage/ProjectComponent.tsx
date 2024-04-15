import React from 'react';
import { Project } from '@features/ProjectPage/types';

export function ProjectComponent({
  imageUrl,
  title,
  id,
  description,
}: Readonly<Project>) {
  return (
    <div key={id}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
