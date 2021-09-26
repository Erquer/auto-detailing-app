import React from 'react';
import { StyledButtonAsLink } from './Button.styled';

interface ButtonProps {
  to: string;
  innerText: string;
}

const Button = ({ to, innerText }: ButtonProps) => (
  <StyledButtonAsLink to={to}>{innerText}</StyledButtonAsLink>
);

export default Button;
