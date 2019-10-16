import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Resume({ className, entries }) {
  return (
    <S.ResumeWrapper className={`resume ${className}`} title="Resumo da Aula">
      {entries.map((each, index) =>
        each ? (
          <S.ResumeContent key={index}>{each}</S.ResumeContent>
        ) : (
          <S.Breakline key={index} />
        ),
      )}
    </S.ResumeWrapper>
  );
}

Resume.defaultProps = { className: '' };

Resume.propTypes = {
  className: PropTypes.string,
  entries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Resume;
