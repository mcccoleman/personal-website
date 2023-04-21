import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledATag = styled.a`
  color: blue;
`;

interface ExternalLinkProps extends PropsWithChildren {
  destination: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({
  destination,
  children,
}) => <StyledATag href={destination}>{children}</StyledATag>;
