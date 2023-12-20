import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  color: #121212;
  background: var(--Primary-Main, #fff);
  border: 1px solid #fff;
  height: 40px;
  width: 100%;
  max-width: 343px;
  box-sizing: border-box;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background: #121212;
  }
`;
