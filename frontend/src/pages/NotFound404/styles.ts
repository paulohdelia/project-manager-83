import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: #333;
    font-size: 24px;
    padding: 0.3em;
  }

  h1 {
    color: white;
    padding-bottom: 0.6em;
  }
`;

export const Button = styled.button`
  padding: 1em 2em;
  background: var(--primary);
  border: none;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  font-weight: bold;
  text-decoration: none;
  color: var(--background);

  &:hover {
    background: ${shade(0.2, '#00e676')};
  }

  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;
