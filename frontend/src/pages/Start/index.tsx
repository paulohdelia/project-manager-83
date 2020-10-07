import React from 'react';

import { FaCode, FaUsers } from 'react-icons/fa';
import { Container, EntryCard, EntryCardItem } from './styles';

import logo from '../../assets/logo.png';

const Start: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Project Manager" />
      <EntryCard>
        <EntryCardItem>
          <FaCode size={50} />
          <span>Entrar como Dev</span>
        </EntryCardItem>
        <EntryCardItem color="#fff" background="#111">
          <FaUsers size={50} />
          <span>Entrar como Cliente</span>
        </EntryCardItem>
      </EntryCard>
    </Container>
  );
};

export default Start;
