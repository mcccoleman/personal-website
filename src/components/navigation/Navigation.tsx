import React from "react";
import { Link } from "gatsby";
import { PRIMARY_LINKS, EXTERNAL_LINKS } from "./constants";
import {
  NavigationContainer,
  PrimaryNavigationItemWrapper,
  ExternalNavigationItemWrapper,
} from "./navigationUtils";
import { Flex } from "src/components/flex";

export const Navigation = () => (
  <NavigationContainer justifyContent="space-between">
    <Flex>
      {PRIMARY_LINKS.map(({ copy, link }) => (
        <PrimaryNavigationItemWrapper key={copy}>
          <Link to={link}>{copy}</Link>
        </PrimaryNavigationItemWrapper>
      ))}
    </Flex>
    <Flex>
      {EXTERNAL_LINKS.map(({ copy, link }) => (
        <ExternalNavigationItemWrapper key={copy}>
          <Link to={link}>{copy}</Link>
        </ExternalNavigationItemWrapper>
      ))}
    </Flex>
  </NavigationContainer>
);
