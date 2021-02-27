import React from "react";
import { css } from "twin.macro";

import Sidebar from "../components/Sidebar";

const Home = (): JSX.Element => {
  return (
    <div
      tw="h-screen w-screen m-4"
      css={css`
        display: grid;
        grid-template-columns: 4fr repeat(4, 3fr);
        grid-template-rows: 1fr;
      `}
    >
      <div tw="col-span-1 h-screen">
        <Sidebar />
      </div>
      <div tw="col-span-1 h-screen"></div>
      <div tw="col-span-1 h-screen"></div>
      <div tw="col-span-1 h-screen"></div>
      <div tw="col-span-1 h-screen"></div>
    </div>
  );
};

export default Home;
