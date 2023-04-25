import React from "react";
import { Layout } from "src/components/layout";
import headShot from "../images/headshot.jpg";
import { Flex } from "src/components/flex";
import { PageContent } from "src/page-components";
import { SEO } from "src/components/SEO";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

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
      <PageContent />
    </StyledFlex>
  </Layout>
);

export default IndexPage;

export const Head = () => <SEO />;
