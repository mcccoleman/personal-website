import React from "react";
import { Link } from "gatsby";
import { PRIMARY_LINKS, EXTERNAL_LINKS } from "./utils";
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
        <>
          {link.includes("https") ? (
            <ExternalNavigationItemWrapper key={copy}>
              <Link to={link}>{copy}</Link>
            </ExternalNavigationItemWrapper>
          ) : (
            <ExternalNavigationItemWrapper key={copy}>
              <a href={link} target="_blank">
                {copy}
              </a>
            </ExternalNavigationItemWrapper>
          )}
        </>
      ))}
    </Flex>
  </NavigationContainer>
);
