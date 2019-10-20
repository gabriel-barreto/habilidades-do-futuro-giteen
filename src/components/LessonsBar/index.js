import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function LessonsBar({ lessons }) {
  return lessons && lessons.length > 0 ? (
    <S.LessonsBarWrapper>
      {lessons.map(each => (
        <S.LessonItem className={each.active ? '--active' : ''}>
          <S.LessonItemStep className="featured">{`#${each.step}`}</S.LessonItemStep>
          <S.LessonItemTitle className="title">{each.title}</S.LessonItemTitle>
        </S.LessonItem>
      ))}
    </S.LessonsBarWrapper>
  ) : null;
}

LessonsBar.defaultProps = { lessons: [] };

LessonsBar.propTypes = {
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default LessonsBar;
