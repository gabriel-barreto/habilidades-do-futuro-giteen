import React from 'react';
import PropTypes from 'prop-types';

import { Link as Icon } from '../../styles/icons';
import * as S from './styled';

function Links({ entries }) {
  return (
    <S.LinksWrapper>
      {entries.map(each => (
        <S.LinkItem>
          <S.Link
            key={each.url}
            href={each.url}
            title={each.label}
            alt={each.label}
          >
            <S.LinkIcon>
              <Icon />
            </S.LinkIcon>
            <S.LinkLabel>{each.label}</S.LinkLabel>
          </S.Link>
        </S.LinkItem>
      ))}
    </S.LinksWrapper>
  );
}

Links.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Links;
