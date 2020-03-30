/**
 * @Info: We can define site themes here and even make use of props if we want to
 */

import { createGlobalStyle } from 'styled-components';

const SiteTheme = createGlobalStyle`
  body {
    margin: 0px;
    overflow-x: hidden;
    width: 100%;
  }
  p, h1, h2, h3, h4, h5, h6 {
    display: inline-block;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
`;

export default SiteTheme;
