import React from 'react';

import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, Form, FormActions } from './styles';

const SignInClient: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <Form>
          <h1>Login como Cliente</h1>
          <Input icon={FaCode} />
          <Button>Entrar</Button>
          <FormActions>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  );
};

export default SignInClient;
