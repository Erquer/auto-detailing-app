import styled from 'styled-components';
import { toRem } from '../../utils/utils';


export const StyledDashboardWrapper = styled.div`
    display: flex;
    flex: 1;
    background-color: #b6b6b6;
    flex-flow: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    height: ${toRem(400)};
    
`;

export const StyledDashboardElement = styled.div<{basis?: string}>`
    flex-basis: ${props=> (props.basis || 'calc(100%/2)')};
    min-height: ${toRem(150)};
    border: 1px solid black;
    padding: 1rem;
    box-sizing: border-box;
`;
