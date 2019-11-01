import React from 'react';
import PropTypes from 'prop-types';

import { $store } from '../../services';

import * as S from './styled';
import Content from './content';

function TitleBar({ lesson, login }) {
  return (
    <S.TitleBarWrapper>
      <S.TitleBarBrand {...Content.brand} />
      <S.TitleBarTitleWrapper>
        {lesson ? (
          <>
            <S.TitleBarTitleDesc>Tema da Aula:</S.TitleBarTitleDesc>
            <S.TitleBarLessonTitle>{lesson}</S.TitleBarLessonTitle>
          </>
        ) : null}
      </S.TitleBarTitleWrapper>
      {!login ? null : (
        <S.LoginButton to={$store.get().token ? '/minhas-aulas' : '/entrar'}>
          Entrar
        </S.LoginButton>
      )}
    </S.TitleBarWrapper>
  );
}

TitleBar.defaultProps = { lesson: '', login: false };

TitleBar.propTypes = { lesson: PropTypes.string, login: PropTypes.bool };

export default TitleBar;
