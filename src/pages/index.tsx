import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { Layout, Flex, SEO } from "src/components";

import { IndexPageContent } from "src/page-components";

const StyledFlex = styled(Flex)`
  @media (max-width: 600px) {
    display: block;
  }
`;

const StyledImageWrapper = styled(Flex)`
  @media (max-width: 600px) {
    max-width: 100%;
  }

  max-width: 50%;
`;

const IndexPage = () => (
  <Layout>
    <StyledFlex justifyContent="space-between">
      <StyledImageWrapper>
        <StaticImage alt="michael-coleman" src="../images/headshot.jpg" />
      </StyledImageWrapper>
      <IndexPageContent />
    </StyledFlex>
  </Layout>
);

export default IndexPage;

export const Head = () => <SEO />;
