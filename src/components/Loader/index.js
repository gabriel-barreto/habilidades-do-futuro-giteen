import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Loader({ active }) {
  return (
    <S.LoaderOverlay className={active ? '--active' : ''}>
      <S.LoaderSpinner />
    </S.LoaderOverlay>
  );
}

Loader.defaultProps = { active: false };
Loader.propTypes = { active: PropTypes.bool };

export default Loader;
