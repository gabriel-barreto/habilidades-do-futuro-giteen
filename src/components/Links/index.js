import React from 'react';
import PropTypes from 'prop-types';

import { Link as Icon } from '../../styles/icons';
import * as S from './styled';

function Links({ entries }) {
  return (
    <S.LinksContainer title="Links da Aula">
      <S.LinksWrapper>
        {entries.map(each => (
          <S.LinkItem key={each.url}>
            <S.Link
              target="blank"
              rel="noreferrer noopener"
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
    </S.LinksContainer>
  );
}

Links.defaultProps = { entries: [] };

Links.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
};

export default Links;
