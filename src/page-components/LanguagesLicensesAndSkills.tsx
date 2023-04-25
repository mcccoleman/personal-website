import React from "react";
import { Flex } from "src/components/flex";
import { languages, licensesAndSkills, constructList } from "./utils";

export const LanguagesLicensesAndSkills = () => (
  <Flex justifyContent="space-between">
    <Flex column>{constructList(languages)}</Flex>
    <Flex column>{constructList(licensesAndSkills)}</Flex>
  </Flex>
);
