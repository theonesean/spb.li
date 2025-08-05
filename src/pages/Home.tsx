import React from "react";
import { css } from "twin.macro";

import Sidebar from "../components/Sidebar";

const Home = (): JSX.Element => {
  return (
    <div
      tw="h-screen w-screen pl-4"
      css={css`
        display: grid;
        column-gap: 0.5rem;
        grid-template-columns: fit-content(16rem) repeat(8, 2fr);
        grid-template-rows: fit-content(9vw) 1fr fit-content(1440px);
        grid-auto-flow: columns dense;
      `}
    >
      <div tw="col-span-1 row-start-1 row-end-4 h-screen">
        <Sidebar />
      </div>
      <div
        tw="uppercase tracking-tighter font-bold bg-red-500 text-white col-start-2 col-end-6 mb-2"
        css={css`
          font-size: 9vw;
          line-height: 9vw;
        `}
      >
        I work.
      </div>
      <div tw="col-start-2 col-end-4 row-start-2 row-end-4 overflow-ellipsis bg-gray-100">
        {/* section 1 */}
      </div>
      <div tw="col-start-4 col-end-6 row-start-2 row-end-3 overflow-ellipsis bg-gray-200">
        {/* section 2 */}
      </div>
      <div tw="col-start-4 col-end-5 row-start-3 row-end-4 overflow-ellipsis bg-gray-200">
        {/* section 3 */}
      </div>
      <div tw="col-start-6 col-end-8 row-start-1 row-end-3 overflow-ellipsis bg-gray-300">
        {/* section 4 */}
      </div>
      <div tw="col-start-8 col-end-10 row-start-1 row-end-3 overflow-ellipsis bg-gray-400">
        {/* section 5 */}
      </div>

      <div tw="col-start-5 col-end-10 row-start-3 row-end-4 aspect-w-3 aspect-h-4 mt-2">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://image.mux.com/aEzojlZOfiWM4ZpsomKfYqhzxoaoHC006bSUFnyf8Dlo/thumbnail.png"
        >
          <source
            src="https://stream.mux.com/aEzojlZOfiWM4ZpsomKfYqhzxoaoHC006bSUFnyf8Dlo.m3u8"
            type="application/x-mpegURL"
          />
        </video>
      </div>
    </div>
  );
};

export default Home;
