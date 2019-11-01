import React from 'react';
import PropTypes from 'prop-types';

import { $store } from '../../services';

import * as S from './styled';
import Content from './content';

function TitleBar({ lesson }) {
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
      {$store.get().token ? null : (
        <S.LoginButton to="/entrar">Entrar</S.LoginButton>
      )}
    </S.TitleBarWrapper>
  );
}

TitleBar.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default TitleBar;
