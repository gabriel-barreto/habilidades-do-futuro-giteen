import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Resume({ className, entries }) {
  return (
    <S.ResumeWrapper className={className}>
      {entries.map((each, index) => (
        <S.ResumeContent key={index}>{each}</S.ResumeContent>
      ))}
    </S.ResumeWrapper>
  );
}

Resume.defaultProps = { className: '' };

Resume.propTypes = {
  className: PropTypes.string,
  entries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Resume;
