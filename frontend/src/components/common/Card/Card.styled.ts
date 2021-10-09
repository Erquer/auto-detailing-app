import { css } from 'styled-components';
import { toRem } from '../../../utils/utils';

export const StyledCard = css`
  position: relative;
  /* min-height: ${toRem(150)}; */
  padding: 1rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
`;
