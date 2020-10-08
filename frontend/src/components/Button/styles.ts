import styled from 'styled-components';

export const Container = styled.button`
  width: 300px;
  height: 42px;
  border-radius: 4px;
  border: 0;

  background: var(--primary);

  font-weight: bold;
  font-size: 16px;

  color: var(--background);

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: var(--primary-shade);
  }
`;
