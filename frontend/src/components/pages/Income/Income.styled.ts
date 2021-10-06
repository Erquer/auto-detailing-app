import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import { StyledCard } from '../../common/Card/Card.styled';

export const IncomeStyled = styled.div`
  ${StyledCard};
  width: 80vw;
  height: 90vh;
`;

export const StyledTableCell = styled(TableCell)`
  color: 'white';
`;
