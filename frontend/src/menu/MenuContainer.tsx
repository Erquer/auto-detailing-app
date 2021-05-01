import React from 'react';
import { StyledMenuContainer, StyledMenuItem } from './MenuComponents.styled';

export const MenuContainer = () => {


    return(
        <StyledMenuContainer>
            <StyledMenuItem> Option one </StyledMenuItem>
            <StyledMenuItem> Option two </StyledMenuItem>
            <StyledMenuItem> Option three </StyledMenuItem>
            <StyledMenuItem> Option four </StyledMenuItem>
        </StyledMenuContainer>
    );
}