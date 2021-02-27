import React, { ReactChild } from "react";
import { GlobalStyles } from "twin.macro";

const Layout = ({
  children,
  ...rest
}: {
  children?: ReactChild | ReactChild[];
}) => (
  <div {...rest}>
    <GlobalStyles />
    {children}
  </div>
);

export default Layout;
