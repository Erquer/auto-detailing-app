import React from 'react';
import { StyledDashboardElement, StyledDashboardWrapper } from './Dashboard.styled';


export const Dashboard = () => {
    return(
        <StyledDashboardWrapper>
            <StyledDashboardElement>Pierwszy</StyledDashboardElement>
            <StyledDashboardElement>Drugi</StyledDashboardElement>
            <StyledDashboardElement basis='100%'>Trzeci</StyledDashboardElement>
        </StyledDashboardWrapper>
    )
}