import React, { ReactNode } from "react";

import { Container } from "./styled";

type ComponentContainerProps = {
  children?: ReactNode;
};
const AppContainer = ({ children }: ComponentContainerProps) => {
  return <Container>{children}</Container>;
};

export default AppContainer;
