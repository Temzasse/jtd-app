import React from 'react';
import { css } from '@emotion/core';
import theme from './theme';

export const IS_BROWSER = typeof window !== 'undefined';

export const noop = () => {};

// Source: https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/40207469
export const isTouchDevice = () => {
  if (!IS_BROWSER) return false;

  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  const mq = query => window.matchMedia(query).matches;

  if (
    'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch)
  ) {
    return true;
  }

  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(
    ''
  );

  return mq(query);
};

// Source: https://usehooks.com/useOnClickOutside/
export const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export const getArrData = data => {
  return data.allMarkdownRemark.edges.map(({ node }) => ({
    id: node.id,
    ...node.fields,
    ...node.frontmatter,
  }));
};

export const getData = data => {
  const { id, fields = {}, frontmatter = {} } = data.markdownRemark;
  return {
    id,
    ...fields,
    ...frontmatter,
  };
};

export const mobileOnly = css`
  @media screen and (min-width: 34em) {
    display: none;
  }
`;

export const desktopOnly = css`
  @media screen and (max-width: 34em) {
    display: none;
  }
`;

export const dotGrid = (color = theme.primary[300]) => css`
  background-size: 30px 30px;
  background-image: radial-gradient(${color} 5%, transparent 0);
`;

export const BREAKPOINTS = {
  sm: 700,
  // NOTE: `md` is not really needed since tablet size is between `sm` and `lg`
  // md: 900,
  lg: 1025,
};

const em = px => `${px / 16}em`;

export const media = {
  sm: (first, ...args) => css`
    @media screen and (max-width: ${em(BREAKPOINTS.sm)}) {
      ${css(first, ...args)}
    }
  `,
  md: (first, ...args) => css`
    @media screen and (min-width: ${em(
        BREAKPOINTS.sm + 1
      )}) and (max-width: ${em(BREAKPOINTS.lg - 1)}) {
      ${css(first, ...args)}
    }
  `,
  lg: (first, ...args) => css`
    @media screen and (min-width: ${em(BREAKPOINTS.lg)}) {
      ${css(first, ...args)}
    }
  `,
};

const hasSizeProp = (obj, p, size) => !!(obj[p] && obj[p][size] !== undefined);

export const responsivify = (prop, cssProp, valueMap) => props => {
  const getValue = v => (valueMap ? valueMap[v] : v);

  if (typeof props[prop] === 'string') {
    return `${cssProp}: ${getValue(props[prop])};`;
  }

  return css`
    ${hasSizeProp(props, prop, 'lg') &&
      media.lg`${cssProp}: ${getValue(props[prop].lg)}`}
    ${hasSizeProp(props, prop, 'md') &&
      media.md`${cssProp}: ${getValue(props[prop].md)}`}
    ${hasSizeProp(props, prop, 'sm') &&
      media.sm`${cssProp}: ${getValue(props[prop].sm)}`}
  `;
};
