import React from "react";
import { Link } from "gatsby";

import { Flex } from "src/components";

import {
  NavigationContainer,
  PrimaryNavigationItemWrapper,
  ExternalNavigationItemWrapper,
} from "./navigationUtils";
import { PRIMARY_LINKS, EXTERNAL_LINKS } from "./utils";

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
          {link.includes("https") ? (
            <Link to={link} target="_blank">
              {copy}
            </Link>
          ) : (
            <a href={link} target="_blank">
              {copy}
            </a>
          )}
        </ExternalNavigationItemWrapper>
      ))}
    </Flex>
  </NavigationContainer>
);
