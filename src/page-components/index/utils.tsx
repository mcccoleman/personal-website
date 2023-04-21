import React from "react";
import { Flex } from "src/components/flex";

interface Attributes {
  title: string;
  list: string[];
}

const languages = {
  title: "Languages:",
  list: [
    "React",
    "Redux",
    "Javascript",
    "Ruby",
    "Ruby on Rails",
    "Regex",
    "Python",
    "SQL",
  ],
};
const licensesAndSkills = {
  title: "Licenses and Skills:",
  list: [
    "Certified Financial Planner Practitioner",
    "Series 7 (Expired)",
    "Series 66 (Expired)",
    "Life and Health Insurance Licenses (Expired)",
  ],
};

const constructList = (skills: Attributes) => (
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

export const LanguagesLicensesAndSkills = () => (
  <Flex justifyContent="space-between">
    <Flex column>{constructList(languages)}</Flex>
    <Flex column>{constructList(licensesAndSkills)}</Flex>
  </Flex>
);
