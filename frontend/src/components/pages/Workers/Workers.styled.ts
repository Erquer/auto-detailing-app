import styled from 'styled-components';
import { StyledCard } from '../../common/Card/Card.styled';

export const StyledWorkers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

export const StyledWorkersCard = styled.div`
  ${StyledCard}
  width: 80%;
`;

export const StyledActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
