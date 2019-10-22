import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function LessonsBar({ lessons, onClick }) {
  return lessons && lessons.length > 0 ? (
    <S.LessonsBarWrapper>
      {lessons.map(each => (
        <S.LessonItem
          key={each.step}
          className={each.active ? '--active' : ''}
          onClick={() => onClick(each.step)}
        >
          <S.LessonItemHeader>
            <S.LessonItemStep className="step featured">{`#${each.step}`}</S.LessonItemStep>
            <S.LessonItemTitle className="title">
              {each.title}
            </S.LessonItemTitle>
          </S.LessonItemHeader>
          {!each.active ? (
            <S.LessonItemAvailable>
              {each.availableAt !== 'Expirado' ? (
                <S.LessonItemAvailableSub>
                  Disponível em:
                </S.LessonItemAvailableSub>
              ) : null}
              {each.availableAt}
            </S.LessonItemAvailable>
          ) : null}
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
  onClick: PropTypes.func.isRequired,
};

export default LessonsBar;
