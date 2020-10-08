import { createGlobalStyle } from 'styled-components';

import { shade } from 'polished';

export default createGlobalStyle`
  :root {
    --primary: #00e676;
    --primary-shade: ${shade(0.2, '#00e676')};

    --background: #111;
    --entry-card: #373737;
    --placeholder: #a5a5a5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background);
  }
`;
