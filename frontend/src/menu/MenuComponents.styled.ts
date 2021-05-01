import styled from 'styled-components';
import { toRem } from '../utils/utils';

export const StyledMenuContainer = styled.div`
    flex-basis: calc(100%/12);
    height: 100%;
`;

export const StyledMenuItem = styled.div`
    height: ${toRem(40)};
    width: 100%;
    padding: ${toRem(8)} ${toRem(10)};
`;