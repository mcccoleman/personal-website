import React from "react";
import { Flex } from "src/components/flex";
import { ExternalLink } from "src/components/external-link";
import { LanguagesLicensesAndSkills } from "./LanguagesLicensesAndSkills";
import styled from "styled-components";

const PageContentWrapper = styled(Flex)`
  margin: 15px 35px;
`;

export const PageContent = () => (
  <PageContentWrapper column>
    <h1>Michael Coleman</h1>
    <p>
      My name is Michael Coleman. I am a Full Stack Engineer, MBA and Certified
      Financial Planner living in Portland, ME. I have worked for both
      traditional and start-up financial firms including{" "}
      <ExternalLink destination="https://www.betterment.com">
        Betterment
      </ExternalLink>
      ,{" "}
      <ExternalLink destination="https://www.ml.com">
        Merrill Lynch
      </ExternalLink>{" "}
      and{" "}
      <ExternalLink destination="https:www.equitymultiple.com">
        EquityMultiple
      </ExternalLink>
      . I received my MBA from Rice University.
      <br />
    </p>
    <LanguagesLicensesAndSkills />
  </PageContentWrapper>
);
