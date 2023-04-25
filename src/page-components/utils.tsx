import React from "react";

interface Attributes {
  title: string;
  list: string[];
}

export const languagesAndTechnologies = {
  title: "Languages:",
  list: [
    "React",
    "GraphQL",
    "Rest APIs",
    "Apollo",
    "Redux",
    "Typescript / Javascript",
    "Ruby",
    "Ruby on Rails",
    "Python",
    "SQL",
    "Creating NPM packages",
    "Creating Ruby gems",
  ],
};

export const licensesAndSkills = {
  title: "Licenses and Skills:",
  list: [
    "Certified Financial Planner Practitioner",
    "Series 7 (Expired)",
    "Series 66 (Expired)",
    "Life and Health Insurance Licenses (Expired)",
  ],
};

export const constructList = (skills: Attributes) => (
  <>
    <h4>
      <u>{skills.title}</u>
    </h4>
    <ul>
      {skills.list.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </>
);
