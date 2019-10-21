import styled, { css } from 'styled-components';

const spin = css`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const active = css`
  &.--active {
    opacity: 1;
    visibility: visible;
  }
`;

export const LoaderOverlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.96);
  display: flex;
  justify-content: center;
  left: 0;
  min-height: 100vh;
  opacity: 0;
  position: fixed;
  top: 0;
  transition: opacity 400ms;
  visibility: hidden;
  width: 100%;
  will-change: opacity, visibility;
  z-index: 999;

  ${active}
`;

export const LoaderSpinner = styled.div`
  ${spin}
  animation: spin .88s linear infinite;
  border: 1.6rem solid rgba(255, 255, 255, 0.08);
  border-bottom-color: var(--primaryColor);
  border-radius: 50%;
  height: 12rem;
  width: 12rem;
`;
