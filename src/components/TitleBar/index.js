import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import Content from './content';

function TitleBar({ lesson }) {
  return (
    <S.TitleBarWrapper>
      <S.TitleBarBrand {...Content.brand} />
      <S.TitleBarTitleWrapper>
        <S.TitleBarTitleDesc>Tema da Aula:</S.TitleBarTitleDesc>
        <S.TitleBarLessonTitle>{lesson}</S.TitleBarLessonTitle>
      </S.TitleBarTitleWrapper>
    </S.TitleBarWrapper>
  );
}

TitleBar.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default TitleBar;
