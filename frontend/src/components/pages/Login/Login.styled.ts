import styled from 'styled-components';
import { StyledCard } from '../../common/Card/Card.styled';
import { StyledButton } from '../../common/styledComponents';

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

export const StyledSignInButton = styled(StyledButton)`
  margin-top: 20px;
`;
