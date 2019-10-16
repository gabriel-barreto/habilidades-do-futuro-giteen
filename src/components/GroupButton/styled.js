import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 3.2rem 0 3.2rem;
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const ButtonHelp = styled.p`
  color: var(--lightest);
  font-size: 1.6rem;
  line-height: 140%;
  margin: 0 0 1.6rem 0;

  > .strong {
    display: block;
    font-size: 1em;
    font-weight: 600;
    margin: 0 0 0.4rem 0;
    width: 100%;
  }
`;

export const ButtonWrapper = styled.a`
  align-items: center;
  background-color: var(--auxColor);
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.2);
  color: var(--darkest);
  display: flex;
  justify-content: center;
  min-height: 4.8rem;
  padding: 0.4rem 2.4rem;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  @media (min-width: 1024px) {
    width: fit-content;
  }
`;
export const ButtonIcon = styled.div`
  height: 2.1rem;
  margin: 0 0.64rem 0 0;
  width: 1.8rem;
`;

export const ButtonLabel = styled.p`
  font-size: 1.4rem;
`;
