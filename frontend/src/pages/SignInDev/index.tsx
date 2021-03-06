import React from 'react';

import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, Form, FormActions } from './styles';

const SignInDev: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <h1>Login como Dev</h1>
          <Input icon={FaEnvelope} placeholder="E-mail" type="email" />
          <Input icon={FaLock} placeholder="Senha" isPassword type="password" />
          <Button>Entrar</Button>
          <FormActions>
            <Link to="/sign-up/dev">Faça seu cadastro</Link>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignInDev;
