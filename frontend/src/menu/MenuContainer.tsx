import React from 'react';
import { StyledMenuContainer, StyledMenuItem } from './MenuComponents.styled';
import { Link, Switch} from 'react-router-dom';

export const MenuContainer = () => {
    return(
        <Switch>
            <StyledMenuContainer>
                <StyledMenuItem><Link to='/'> Dashboard/Home</Link></StyledMenuItem>
                <StyledMenuItem><Link to='/clients'>Klienci</Link></StyledMenuItem>
                <StyledMenuItem><Link to='/services'>Serwisy</Link></StyledMenuItem>
                <StyledMenuItem><Link to='/orders'>Zamówienia</Link></StyledMenuItem>
            </StyledMenuContainer>
        </Switch>    
    );
}