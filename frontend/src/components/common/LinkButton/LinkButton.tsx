import React from 'react';
import { StyledButtonAsLink } from './LinkButton.styled';

interface ButtonProps {
  to: string;
  innerText: string;
}

const LinkButton = ({ to, innerText }: ButtonProps) => (
  <StyledButtonAsLink to={to}>{innerText}</StyledButtonAsLink>
);

export default LinkButton;
