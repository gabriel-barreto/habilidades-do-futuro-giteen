import styled from 'styled-components';

export const ResumeWrapper = styled.div`
  padding: 0 3.2rem 3.2rem 3.2rem;
`;

export const ResumeContent = styled.p`
  color: var(--lightest);
  font-size: 1.6rem;
  line-height: 148%;

  :not(:last-of-type) {
    margin: 0 0 0.8rem 0;
  }
`;
