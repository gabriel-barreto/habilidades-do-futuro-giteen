import styled from 'styled-components';

import Layout from '../../components/Layout';

export const LoginLayout = styled(Layout)`
  align-items: center;
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  :last-of-type {
    margin: 2rem 0 0 0;
  }
`;

export const Label = styled.label`
  color: var(--primaryColor);
  font-size: 1.6rem;
`;

export const LabelHelper = styled.label`
  color: rgba(255, 255, 255, 0.56);
  font-size: 1.4rem;
  margin: 0.64rem 0 0 0;
`;

export const Input = styled.input`
  background: var(--dark);
  border: none;
  border-radius: 4px;
  color: var(--primaryColor);
  font-size: 1.6rem;
  outline-color: transparent;
  margin: 1rem 0 0 0;
  padding: 0.8rem 1.6rem;
  transition: background-color 400ms, color 400ms;
  will-change: background-color, color;
  ::placeholder {
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.4);
  }

  :focus {
    background-color: var(--darkest);
    color: var(--secondaryColor);
  }
`;

export const Form = styled.form`
  padding: 3.2rem;
`;

export const Wrapper = styled.section`
  background-color: var(--darkest);
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.32);
  margin: 0 auto;
  max-width: 48rem;
  width: 92%;
`;

export const Header = styled.div`
  background-color: var(--primaryColor);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 3.2rem;
`;

export const Title = styled.h1`
  color: var(--dark);
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

export const SubmitButton = styled.button`
  background-color: var(--primaryColor);
  border: none;
  border-radius: 4px;
  color: var(--dark);
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 3.2rem 0 0 0;
  padding: 0.8rem 2rem;
  text-align: center;
  text-transform: uppercase;
  transform-origin: center;
  transition: background-color 400ms, transform 320ms;
  width: 100%;
  will-change: background-color, transform;

  :hover {
    background-color: rgba(255, 200, 20, 0.96);
  }

  :active {
    transform: scale(0.88);
  }
`;
