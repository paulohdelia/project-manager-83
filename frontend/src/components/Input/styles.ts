import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  border: 2px solid var(--background);
  background: var(--background);
  border-radius: 4px;
  width: 300px;
  height: 42px;
  margin-bottom: 10px;
  padding: 10px 15px;

  svg {
    margin-right: 5px;
    color: var(--entry-card);
  }

  ${props =>
    props.isFocused &&
    css`
      svg {
        color: var(--primary);
      }
      border-color: var(--primary);
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: var(--primary);
      }
    `}

  input {
    flex: 1;
    height: 100%;
    padding-left: 15px;
    font-size: 16px;
    background: transparent;
    color: white;
    border: 0;

    &::placeholder {
      color: var(--placeholder);
    }
  }

  .icon-click {
    cursor: pointer;
  }
`;
