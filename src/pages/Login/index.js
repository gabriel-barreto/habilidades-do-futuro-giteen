import React, { useState, useEffect } from 'react';

import { $store, $auth } from '../../services';

import Notification from '../../components/Notification';
import Loader from '../../components/Loader';

import * as S from './styled';

const initialState = {
  notification: {
    active: false,
    timeout: 5000,
    title: '',
    content: '',
  },
  loading: false,
};

function Login() {
  const [state, setState] = useState(initialState);

  function onLoad() {
    $store.clean();
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    const payload = Object.fromEntries(
      Array.from(e.target.elements)
        .filter(each => each.nodeName === 'INPUT')
        .map(each => [each.id, each.value]),
    );

    $auth
      .login(payload)
      .then(console.log)
      .catch(console.log);
  }

  function onNotificationClose() {
    setState(prev => ({
      ...prev,
      notification: { ...prev.notification, active: false },
    }));
  }

  useEffect(onLoad, []);
  return (
    <S.LoginLayout title="Entrar">
      <S.Wrapper>
        <S.Header>
          <S.Title>Área de Alunos</S.Title>
        </S.Header>
        <S.Form onSubmit={onSubmitHandler}>
          <S.InputGroup>
            <S.Label htmlFor="email">Email*:</S.Label>
            <S.Input
              name="email"
              id="email"
              type="email"
              minlength="7"
              placeholder="Qual email contou pra gente?"
              required
            />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label htmlFor="passwd">Senha*:</S.Label>
            <S.Input
              name="passwd"
              id="passwd"
              type="password"
              minlength="11"
              maxlength="11"
              placeholder="Lembra do seu CPF?"
              required
            />
          </S.InputGroup>
          <S.SubmitButton type="submit">Entrar</S.SubmitButton>
        </S.Form>
      </S.Wrapper>
      <Notification {...state.notification} onClose={onNotificationClose} />
      <Loader active={state.loading} />
    </S.LoginLayout>
  );
}

export default Login;
