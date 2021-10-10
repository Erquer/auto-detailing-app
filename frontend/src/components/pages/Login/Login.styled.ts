import styled from 'styled-components';
import { StyledCard } from '../../common/Card/Card.styled';

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLoginCard = styled.div`
  ${StyledCard};
  width: 100%;
  max-width: 500px;
`;

export const StyledLoginHeader = styled.h1`
  color: dark;
  font-weight: 300;
  text-align: center;
`;

export const StyledLoginForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
`;

export const StyledInput = styled.input`
  width: 100%;
  min-width: 200px;
  max-width: 250px;
  border-radius: 25px;
  padding: 10px 14px;
  border: 2px solid #2851a3;
  background-color: #f4f4f4;
  font-size: 14px;
`;

export const StyledButton = styled.button`
  background: #2851a3;
  border-radius: 20px;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  max-width: 200px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;

  &:hover {
    opacity: 0.9;
  }
`;

export const StyledLoading = styled.h4`
  font-weight: 500;
  text-align: center;
`;

export const StyledError = styled.span`
  color: red;
  opacity: 0.9;
  font-size: 13px;
  position: absolute;
  bottom: 100px;
`;
