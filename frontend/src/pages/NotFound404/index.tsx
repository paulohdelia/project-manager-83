import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Container, Button } from './styles';

const NotFound404: React.FC = () => {
  return (
    <Container>
      <span>Error 404</span>
      <h1>Página não encontrada</h1>
      <Button as={Link} to="/">
        <FaArrowLeft />
        Ir para a Home
      </Button>
    </Container>
  );
};

export default NotFound404;
