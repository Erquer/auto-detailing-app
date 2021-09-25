import styled from 'styled-components';
import { toRem } from '../../../utils/utils';

export const StyledDashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;
`;

export const StyledDashboardElement = styled.div<{ basis?: string }>`
  position: relative;
  flex-basis: ${(props) => props.basis || 'calc(100%/2)'};
  min-height: ${toRem(150)};
  padding: 1rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);

  &:nth-child(1) {
    grid-column: 1/3;
    grid-row: 1/3;
  }

  &:nth-child(2) {
    grid-column: 3/5;
    grid-row: 1;
  }

  &:nth-child(3) {
    grid-column: 3/5;
    grid-row: 2;
  }

  &:nth-child(4) {
    grid-column: 2/4;
    grid-row: 3;
  }
`;
