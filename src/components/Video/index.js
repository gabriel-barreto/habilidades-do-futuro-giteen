import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Video({ title, src }) {
  return (
    <S.Wrapper>
      <S.Video
        src={src}
        title={title}
        alt={title}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
    </S.Wrapper>
  );
}

Video.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Video;
