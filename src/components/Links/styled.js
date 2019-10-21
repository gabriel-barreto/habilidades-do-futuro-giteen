import styled from 'styled-components';

import Wrapper from '../Wrapper';

export const LinksContainer = styled(Wrapper)`
  padding: 4rem 3.2rem;
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const LinksWrapper = styled.ul``;

export const LinkItem = styled.li``;

export const Link = styled.a`
  align-items: center;
  color: var(--primaryColor);
  display: flex;
  padding: 0.64rem 0 0 0;
  width: 100%;
`;

export const LinkIcon = styled.div`
  height: 2rem;
  margin: 0 0.64rem 0 0;
  width: 2rem;
`;

export const LinkLabel = styled.span`
  font-size: 1.6rem;
  line-height: 144%;
`;
