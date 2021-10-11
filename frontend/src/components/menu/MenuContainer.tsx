import React from 'react';
import { Switch } from 'react-router-dom';
import {
  ImHome3,
  ImBug,
  ImCog,
  ImAccessibility,
  ImAddressBook,
} from 'react-icons/im';
import { ListItem } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { MenuItemLink } from './MenuItemLink';
import { StyledMenuContainer } from './MenuComponents.styled';
import { RootState } from '../../store/slices/rootReducer';

export const MenuContainer = () => {
  const { isLogged } = useSelector((state: RootState) => state.user);

  console.log(isLogged);
  return (
    <Switch>
      <StyledMenuContainer>
        <ListItem
          button
          component={(props: any) => (
            <MenuItemLink
              disabled={!isLogged}
              to="/"
              icon={<ImHome3 color="#fff" />}
              primary="Dashboard"
              {...props}
            />
          )}
        />
        <ListItem
          button
          component={(props: any) => (
            <MenuItemLink
              disabled={!isLogged}
              to="/clients"
              icon={<ImAccessibility color="#fff" />}
              primary="Clients"
              {...props}
            />
          )}
        />
        <ListItem
          button
          component={(props: any) => (
            <MenuItemLink
              disabled={!isLogged}
              to="/services"
              icon={<ImCog color="#fff" />}
              primary="Services"
              {...props}
            />
          )}
        />
        <ListItem
          button
          component={(props: any) => (
            <MenuItemLink
              disabled={!isLogged}
              to="/history"
              icon={<ImAddressBook color="#fff" />}
              primary="History"
              {...props}
            />
          )}
        />
        <ListItem
          button
          component={(props: any) => (
            <MenuItemLink
              disabled={!isLogged}
              to="/orders"
              icon={<ImBug color="#fff" />}
              primary="Orders"
              {...props}
            />
          )}
        />
        <ListItem
          button
          component={(props: any) => (
            <MenuItemLink
              disabled={!isLogged}
              to="/income"
              icon={<ImBug color="#fff" />}
              primary="Income"
              {...props}
            />
          )}
        />
        <ListItem
          button
          component={(props: any) => (
            <MenuItemLink
              disabled={!isLogged}
              to="/workers"
              icon={<ImBug color="#fff" />}
              primary="Workers"
              {...props}
            />
          )}
        />
        {!isLogged ? (
          <ListItem
            button
            component={(props: any) => (
              <MenuItemLink
                disabled={isLogged}
                to="/login"
                icon={<ImAccessibility color="#fff" />}
                primary="Login"
                {...props}
              />
            )}
          />
        ) : (
          <ListItem
            button
            component={(props: any) => (
              <MenuItemLink
                disabled={!isLogged}
                to="/logout"
                icon={<ImAccessibility color="#fff" />}
                primary="Logout"
                {...props}
              />
            )}
          />
        )}
      </StyledMenuContainer>
    </Switch>
  );
};
