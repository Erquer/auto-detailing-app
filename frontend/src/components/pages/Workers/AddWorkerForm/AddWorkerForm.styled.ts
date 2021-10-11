import styled from 'styled-components';
import { StyledCard } from '../../../common/Card/Card.styled';
import { StyledForm } from '../../../common/styledComponents';
import { StyledError } from '../../Login/Login.styled';

export const StyledAddWorkersFormCard = styled.div`
  ${StyledCard}
  width: 65%;
`;

export const StyledWorkerForm = styled(StyledForm)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledWorkersError = styled(StyledError)`
  bottom: 90px !important;
`;
