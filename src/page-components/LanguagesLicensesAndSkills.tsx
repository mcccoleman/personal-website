import React from "react";
import { Flex } from "src/components/flex";
import {
  languagesAndTechnologies,
  licensesAndSkills,
  constructList,
} from "./utils";

export const LanguagesLicensesAndSkills = () => (
  <Flex justifyContent="space-between">
    <Flex column>{constructList(languagesAndTechnologies)}</Flex>
    <Flex column>{constructList(licensesAndSkills)}</Flex>
  </Flex>
);
