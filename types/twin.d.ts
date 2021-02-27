import 'twin.macro';
import styledImport from '@emotion/styled';
import { css as cssImport } from '@emotion/core';

import {} from '@emotion/react/types/css-prop'

// eslint-disable-next-line quotes
declare module 'twin.macro' {
	const styled: typeof styledImport;
	const css: typeof cssImport;
}

declare global {
	namespace JSX {
	  interface IntrinsicAttributes<T> extends DOMAttributes<T> {
		as?: string
	  }
	}
  }