import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IEntryCardItemProps {
  color?: string;
  background?: string;
}

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 400px;
  }
`;

export const EntryCard = styled.div`
  padding: 50px;
  background: var(--entry-card);
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const EntryCardItem = styled.div<IEntryCardItemProps>`
  width: 200px;
  height: 230px;
  padding: 10px;
  border-radius: 4px;

  color: var(--background);

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
  }

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}

  ${props =>
    props.background
      ? css`
          background: ${props.background};

          &:hover {
            background: ${shade(0.2, props.background)};
          }
        `
      : css`
          background: var(--primary);

          &:hover {
            /* 
              I tried to get the var using this: 
                getComputedStyle(document.documentElement).getPropertyValue('--var-name')
              but I kept getting errors

              For now I hardcoded the value. I think that using themes would handle this the way I want
            */
            background: ${shade(0.2, '#00e676')};
          }
        `}

  margin: 5px;
`;
