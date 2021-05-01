import React from 'react';
import { Dashboard } from './dashboard/Dashboard';
import { StyledMainContainer } from './MainContainer.styled';
export const MainContainer = () => {

    return (
        <StyledMainContainer>
            <Dashboard />
        </StyledMainContainer>
    )
}