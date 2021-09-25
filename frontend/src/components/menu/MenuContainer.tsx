import React from 'react';
import { Switch } from 'react-router-dom';
import { ImHome3, ImBug, ImCog, ImAccessibility } from 'react-icons/im';
import { ListItem } from '@material-ui/core';
import { MenuItemLink } from './MenuItemLink';
import { StyledMenuContainer } from './MenuComponents.styled';

export const MenuContainer = () => (
  <Switch>
    <StyledMenuContainer>
      <ListItem
        button
        component={MenuItemLink}
        to="/"
        icon={<ImHome3 color="#fff" />}
        primary="Dashboard"
      />
      <ListItem
        button
        component={MenuItemLink}
        to="/clients"
        icon={<ImAccessibility color="#fff" />}
        primary="Clients"
      />
      <ListItem
        button
        component={MenuItemLink}
        to="/services"
        icon={<ImCog color="#fff" />}
        primary="Services"
      />
      <ListItem
        button
        component={MenuItemLink}
        to="/orders"
        icon={<ImBug color="#fff" />}
        primary="Orders"
      />
      <ListItem
        button
        component={MenuItemLink}
        to="/login"
        icon={<ImAccessibility color="#fff" />}
        primary="Login"
      />
    </StyledMenuContainer>
  </Switch>
);
