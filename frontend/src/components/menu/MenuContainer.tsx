import React from 'react';
import { StyledMenuContainer, StyledMenuItem } from './MenuComponents.styled';
import { Link, Switch} from 'react-router-dom';
import { ImHome3 , ImBug, ImCog, ImAccessibility} from 'react-icons/im';
import { ListItem } from '@material-ui/core';
import { MenuItemLink } from './MenuItemLink';
export const MenuContainer = () => {
    return(
        <Switch>
            <StyledMenuContainer>
                <ListItem button component={MenuItemLink} to='/' icon={<ImHome3 />} primary='Dashboard' />
                <ListItem button component={MenuItemLink} to='/clients' icon={<ImAccessibility />} primary='Clients' />
                <ListItem button component={MenuItemLink} to='/services' icon={<ImCog />} primary='Services' />
                <ListItem button component={MenuItemLink} to='/orders' icon={<ImBug />} primary='Orders' />
            </StyledMenuContainer>
        </Switch>    
    );
}