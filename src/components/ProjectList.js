import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  
  // projects.filter(technologies)
 const projOneName = projects[0].name 
const projOneAbout = projects[0].about  

const projTwoName = projects[1].name 
const projTwoAbout= projects[1].about  

const projThreeName = projects[2].name
const projThreeAbout= projects[2].about  

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem key = "1" name = {projOneName} about ={projOneAbout} />
        <ProjectItem key = "2" name = {projTwoName} about ={projTwoAbout} />
        <ProjectItem key = "3" name = {projThreeName} about ={projThreeAbout} /> 
      
      </div>
    </div>
  );
}

export default ProjectList;
