import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background: transparent;
  border-radius: 6px;
  border: 3px solid var(--greyscale-white-50, rgba(255, 255, 255, 0.5));
  height: 60px;
  color: #fff;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0px 18px;
  outline: none;
  &:focus {
    border: 3px solid var(--Tutor-Main, #ff9b33);
  }
`;

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

export default Input;
