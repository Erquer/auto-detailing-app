import React from 'react';
import { StyledMenuContainer } from './MenuComponents.styled';
import { Switch } from 'react-router-dom';
import { ImHome3, ImBug, ImCog, ImAccessibility } from 'react-icons/im';
import { ListItem } from '@material-ui/core';
import { MenuItemLink } from './MenuItemLink';
export const MenuContainer = () => {
  return (
    <Switch>
      <StyledMenuContainer>
        <ListItem
          button
          component={MenuItemLink}
          to="/"
          icon={<ImHome3 />}
          primary="Dashboard"
        />
        <ListItem
          button
          component={MenuItemLink}
          to="/clients"
          icon={<ImAccessibility />}
          primary="Clients"
        />
        <ListItem
          button
          component={MenuItemLink}
          to="/services"
          icon={<ImCog />}
          primary="Services"
        />
        <ListItem
          button
          component={MenuItemLink}
          to="/orders"
          icon={<ImBug />}
          primary="Orders"
        />
        <ListItem
          button
          component={MenuItemLink}
          to="/login"
          icon={<ImAccessibility />}
          primary="Login"
        />
      </StyledMenuContainer>
    </Switch>
  );
};
