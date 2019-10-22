import styled, { css } from 'styled-components';

const beforeLine = css`
  background-color: var(--primaryColor);
  content: '';
  display: block;
  height: calc(100% - 64px);
  left: 50%;
  margin: auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 2px;
  @media (min-width: 1024px) {
    height: 2px;
    max-width: calc(100vw - 128px);
    width: 100%;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

export const LessonsBarWrapper = styled.ul`
  --lg: calc((100vw - 1200px) / 2);
  --xl: calc((100vw - 1400px) / 2);

  background-color: var(--darkest);
  display: grid;
  position: relative;
  padding: 3.2rem;

  &::before {
    ${beforeLine}
  }

  @media (min-width: 768px) {
    padding: 3.2rem 6.4rem;
  }
  @media (max-width: 1023px) {
    grid-template-rows: repeat(5, 1fr);
    row-gap: 2.4rem;
  }
  @media (min-width: 1024px) {
    column-gap: 2.4rem;
    padding: 3.2rem 6.4rem 4.8rem 6.4rem;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
  }
  @media (min-width: 1200px) {
    padding: 3.2rem var(--lg) 4.8rem var(--lg);
  }
  @media (min-width: 1400px) {
    column-gap: 4.8rem;
    padding: 3.2rem var(--xl) 4.8rem var(--xl);
  }
`;

export const LessonItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 65%;
`;

export const LessonItemAvailableSub = styled.span`
  color: var(--primaryColor);
  font-size: 1.2rem;
  text-align: right;
`;

export const LessonItemAvailable = styled.p`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  color: var(--primaryColor);
  font-size: 1.4em;
  font-weight: 600;
  justify-content: center;
  line-height: 144%;
  text-align: right;
  width: 40%;
`;

export const LessonItem = styled.li`
  align-items: center;
  background-color: var(--dark);
  border-radius: 4px;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.24);
  cursor: not-allowed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.6rem;
  position: relative;
  transition: background-color 400ms;
  z-index: 1;
  will-change: background-color;

  &.--active {
    background-color: var(--primaryColor);
    cursor: pointer;
    .step,
    .title {
      color: var(--dakest);
    }
    :hover {
      background-color: var(--darkest);
      .step,
      .title {
        color: var(--primaryColor);
      }
    }
  }
`;

export const LessonItemTitle = styled.p`
  color: rgba(255, 200, 19, 0.4);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 128%;
  margin: 0.4rem 0 0 0;
  transition: color 400ms;
  text-transform: uppercase;
`;

export const LessonItemStep = styled.span`
  color: rgba(255, 200, 19, 0.4);
  font-size: 1.6rem;
  will-change: color 400ms;
`;
