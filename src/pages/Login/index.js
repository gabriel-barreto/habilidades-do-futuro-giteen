import React from 'react';

import * as S from './styled';

function Login() {
  function onSubmitHandler(e) {
    e.preventDefault();

    const payload = Object.fromEntries(
      Array.from(e.target.elements)
        .filter(each => each.nodeName === 'INPUT')
        .map(each => [each.id, each.value]),
    );

    return payload;
  }

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
    </S.LoginLayout>
  );
}

export default Login;
