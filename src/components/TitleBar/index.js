import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import Content from './content';

function TitleBar({ lesson }) {
  return (
    <S.TitleBarWrapper>
      <S.TitleBarBrand {...Content.brand} />
      <S.TitleBarLessonTitle>{lesson}</S.TitleBarLessonTitle>
      <S.TitleBarButton>Entrar no Grupo</S.TitleBarButton>
    </S.TitleBarWrapper>
  );
}

TitleBar.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default TitleBar;
