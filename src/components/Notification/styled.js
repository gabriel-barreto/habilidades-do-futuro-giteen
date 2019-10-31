import styled, { css } from 'styled-components';

const active = css`
  opacity: 1;
  visibility: visible;
`;

export const NotificationWrapper = styled.section`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.32);
  left: 0;
  opacity: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 400ms, visibility 400ms;
  visibility: hidden;
  width: 100%;
  will-change: opacity, visibility;
  z-index: 9;

  @media (min-width: 1024px) {
    left: auto;
    top: 16px;
    right: 16px;
    max-width: 40rem;
  }

  &.--active {
    ${active}
  }
`;

export const NotificationHeader = styled.div`
  align-items: center;
  background-color: var(--primaryColor);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1.6rem;
`;

export const Title = styled.h1`
  color: var(--darkest);
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const CloseButton = styled.button`
  --size: 4.8rem;

  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--darkest);
  display: flex;
  font-size: 2rem;
  height: var(--size);
  justify-content: center;
  transform-origin: center;
  transition: color 400ms, transform 400ms;
  width: var(--size);
  will-change: color, transform;

  :hover {
    color: var(--dark);
  }

  :active {
    transform: scale(0.88);
  }
`;

export const NotificationBody = styled.div`
  background-color: var(--lightest);
  font-size: 1.6rem;
  line-height: 136%;
  padding: 1.6rem;
`;

export const NotificationFooter = styled.footer`
  background-color: var(--light);
  height: 0.8rem;
  position: relative;

  :after {
    background-color: var(--primaryColor);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: ${props => `translateX(-${props.progress}%);`};
    transition: transform 400ms linear;
    will-change: transform;
    width: 100%;
  }
`;
