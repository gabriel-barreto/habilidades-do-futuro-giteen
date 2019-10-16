import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Wrapper({ title, className, children }) {
  return (
    <div className={`wrapper ${className}`}>
      <S.Title className="title">{title}</S.Title>
      {children}
    </div>
  );
}

Wrapper.defaultProps = { className: '' };

Wrapper.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
