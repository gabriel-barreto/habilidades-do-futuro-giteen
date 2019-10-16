import styled from 'styled-components';

import Wrapper from '../Wrapper';

export const ResumeWrapper = styled(Wrapper)`
  padding: 0 3.2rem 3.2rem 3.2rem;
  @media (min-width: 1200px) {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 0 3.2rem 0;
  }
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

export const Breakline = styled.div`
  height: 2.4rem;
`;

export const ResumeContent = styled.p`
  color: var(--lightest);
  font-size: 1.6rem;
  line-height: 148%;

  :not(:last-of-type) {
    margin: 0 0 0.8rem 0;
  }
`;
