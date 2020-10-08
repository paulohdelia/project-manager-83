import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { FaCode, FaUsers } from 'react-icons/fa';
import { Container, EntryCard, EntryCardItem } from './styles';

import logo from '../../assets/logo.png';

const Start: React.FC = () => {
  const history = useHistory();

  const navigate = useCallback((path: string) => {
    history.push(`/sign-in/${path}`);
  }, [history]);

  return (
    <Container>
      <img src={logo} alt="Project Manager" />
      <EntryCard>
        <EntryCardItem onClick={() => navigate('dev')}>
          <FaCode size={50} />
          <span>Entrar como Dev</span>
        </EntryCardItem>
        <EntryCardItem onClick={() => navigate('client')} color="#fff" background="#111">
          <FaUsers size={50} />
          <span>Entrar como Cliente</span>
        </EntryCardItem>
      </EntryCard>
    </Container>
  );
};

export default Start;
