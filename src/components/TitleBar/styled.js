import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const TitleBarWrapper = styled.div`
  --lg: calc((100vw - 1200px) / 2);
  --xl: calc((100vw - 1400px) / 2);

  align-items: center;
  background-color: var(--darkest);
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  width: 100%;
  @media (min-width: 768px) {
    padding: 1.6rem 3.2rem;
  }
  @media (min-width: 1200px) {
    padding: 1.6rem var(--lg);
  }
  @media (min-width: 1400px) {
    padding: 2.4rem var(--xl);
  }
`;

export const TitleBarTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.6rem 0 2.4rem;
  width: 100%;
  @media (min-width: 425px) {
    margin: 0 1.6rem 0 3.2rem;
  }
`;

export const TitleBarTitleDesc = styled.p`
  color: var(--light);
  font-size: 1.2rem;
  margin: 0 0 0.4rem 0;
  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const TitleBarLessonTitle = styled.h2`
  color: var(--lightest);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 120%;
  width: 100%;
  @media (min-width: 425px) {
    font-size: 1.8rem;
  }
`;

export const TitleBarBrand = styled.img`
  height: auto;
  object-fit: contain;
  object-position: center;
  width: 10.4rem;
  @media (min-width: 768px) {
    width: 16rem;
  }
  @media (min-width: 1200px) {
    width: 18rem;
  }
  @media (min-width: 1600px) {
    width: 20rem;
  }
`;

export const LoginButton = styled(Link)`
  align-items: center;
  background-color: var(--auxColor);
  border-radius: 2px;
  color: var(--darkest);
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  height: 4.4rem;
  justify-content: center;
  padding: 0.8rem;
  text-align: center;
  text-transform: uppercase;
  width: fit-content;
`;
