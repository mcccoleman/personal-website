import React, { FC, PropsWithChildren } from "react";
import "src/global-styles/styles.css";
import { Navigation } from "src/components/navigation";
import { Flex } from "src/components/flex";

interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Flex column>
    <Navigation />
    {children}
  </Flex>
);
