import styled from 'styled-components';

import logo from '../../assets/logo.png';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  padding: 40px;
  background: var(--entry-card);
  border-radius: 4px;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: white;
  }

  button {
    margin-top: 8px;
  }
`;

export const FormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 10px;

  a {
    color: var(--primary-shade);

    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: var(--primary);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${logo}) no-repeat center;
`;
