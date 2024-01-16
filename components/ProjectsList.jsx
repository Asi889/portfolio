import React from "react";
import projectData from "../src/services/projectData";
import { SingleProject } from "./SingleProject";
function ProjectsList() {
  const projects = projectData();

  return (
    <ol className="relative railway grid gap-y-10 lg:gap-y-40 lg:px-0 pb-12 ">
      {projects.map((project) => {
        return <SingleProject project={project} key={project.id} />;
      })}
    </ol>
  );
}

export default ProjectsList;
