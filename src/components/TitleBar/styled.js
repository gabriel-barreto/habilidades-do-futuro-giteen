import styled from 'styled-components';

export const TitleBarWrapper = styled.div`
  align-items: center;
  background-color: var(--darkest);
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  width: 100%;
`;

export const TitleBarLessonTitle = styled.h2`
  color: var(--lightest);
  font-size: 1.4rem;
  line-height: 120%;
  margin: 0 1.6rem;
  width: 100%;
`;

export const TitleBarBrand = styled.img`
  height: auto;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  width: 10.4rem;
`;

export const TitleBarButton = styled.a`
  align-items: center;
  background-color: var(--auxColor);
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.2);
  color: var(--darkest);
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 120%;
  min-height: 4.8rem;
  padding: 0.64rem 1.6rem;
  text-align: center;
  width: fit-content;
  white-space: nowrap;
`;
