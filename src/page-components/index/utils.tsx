interface Attributes {
  title: string;
  list: string[];
}

export const languagesAndTechnologies = {
  title: "Languages & Technologies",
  list: [
    "React",
    "GraphQL",
    "Rest APIs",
    "Apollo",
    "Redux",
    "Typescript / Javascript",
    "Ruby",
    "Ruby on Rails",
    "SQL",
    "AWS AppRunner",
    "AWS DynamoDB",
    "AWS CDK",
    "Java",
    "Spring",
  ],
};

export const licensesAndSkills = {
  title: "Licenses & Certifications",
  list: [
    "Certified Financial Planner Practitioner",
    "Series 7 (Expired)",
    "Series 66 (Expired)",
    "Life and Health Insurance Licenses (Expired)",
  ],
};

export const constructList = (skills: Attributes) => (
  <>
    <h4>{skills.title}</h4>
    <ul>
      {skills.list.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </>
);
