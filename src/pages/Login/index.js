import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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

function Login({ history }) {
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

    setState(prev => ({ ...prev, loading: true }));
    $auth
      .login(payload)
      .then(() => {
        history.push('/minhas-aula');
      })
      .catch(err => {
        const defaultMsg =
          'Ocorreu um erro ao tentar autorizar sua conta, por favor, verifique os dados e tente novamente.';
        const title = 'Ooops...';
        const content =
          err.status === 500 ? defaultMsg : err.data.message || defaultMsg;

        return setState(prev => ({
          ...prev,
          notification: { ...prev.notification, active: true, title, content },
        }));
      })
      .finally(() => setState(prev => ({ ...prev, loading: false })));
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
            <S.LabelHelper>DDD + Telefone, apenas os números</S.LabelHelper>
            <S.Input
              name="passwd"
              id="passwd"
              type="password"
              minlength="11"
              maxlength="11"
              placeholder="Lembra do seu WhatsApp?"
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
