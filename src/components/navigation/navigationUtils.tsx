import { Flex } from "src/components/flex";
import styled, { css } from "styled-components";

export const NavigationContainer = styled(Flex)`
  width: 100%;
  background-color: rgb(0, 0, 0);
`;

const coverStyle = css`
  a:hover {
    background-color: rgb(64, 64, 64);
  }
`;

const sharedTextStyling = css`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export const PrimaryNavigationItemWrapper = styled.div`
  a {
    ${sharedTextStyling}
  }

  ${coverStyle}
`;

export const ExternalNavigationItemWrapper = styled.div`
  a {
    ${sharedTextStyling}
    font-size: 15px;
  }

  ${coverStyle}
`;
