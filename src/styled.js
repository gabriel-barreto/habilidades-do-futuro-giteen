import styled from 'styled-components';

import Resume from './components/Resume';

export const AppContainer = styled.div`
  background: linear-gradient(to right bottom, var(--darkest), var(--dark));
  min-height: 100vh;
`;

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem 0;
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
    max-width: 1200px;
  }
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

export const VideoContainer = styled.div`
  --lg: calc((100vw - 1200px) / 2);
  --xl: calc((100vw - 1400px) / 2);

  background-color: var(--darkest);
  display: block;
  height: 24rem;

  > .resume {
    overflow-y: scroll;
    padding: 0 6.4rem 3.2rem 3.2rem;
    height: 100%;
  }

  @media (min-width: 425px) {
    height: 32rem;
  }
  @media (min-width: 768px) {
    height: 56rem;
  }
  @media (min-height: 900px) {
    height: 64rem;
  }
  @media (min-height: 1000px) {
    height: 72rem;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 0 var(--lg);
    > .resume {
      padding: 0 0 3.2rem 3.2rem;
    }
  }
  @media (min-width: 1400px) {
    padding: 0 var(--xl);
  }
  @media (max-width: 1199px) {
    > .resume {
      display: none;
    }
  }
`;

export const BottomResume = styled(Resume)`
  @media (min-width: 1200px) {
    display: none;
  }
`;
