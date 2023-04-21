import React from "react";
import { Flex } from "src/components/flex";
import { ExternalLink } from "src/components/external-link";
import { LanguagesLicensesAndSkills } from "./utils";
import styled from "styled-components";

const PageContentWrapper = styled(Flex)`
  margin: 15px 25px;
`;

export const PageContent = () => (
  <PageContentWrapper column>
    <h1>Michael Coleman</h1>
    <p>
      My name is Michael Coleman. I am a Full Stack Developer and Certified
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
      .
      <br />
      <br />I am currently a Full Stack Developer at{" "}
      <ExternalLink destination="https://www.retirable.com">
        Retirable
      </ExternalLink>{" "}
      - a financial planning service designed to get people on-track for
      retirement.
    </p>
    <LanguagesLicensesAndSkills />
  </PageContentWrapper>
);
