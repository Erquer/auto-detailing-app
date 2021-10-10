import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface MenuItemLinkProps {
  icon?: JSX.Element;
  primary: string;
  to: string;
  disabled: boolean;
}

export const MenuItemLink = ({
  icon,
  primary,
  to,
  disabled,
}: MenuItemLinkProps) => {
  const CustomLink = React.useMemo(
    () => React.forwardRef((linkProps) => <Link to={to} {...linkProps} />),
    [to],
  );

  return (
    <ListItem disabled={disabled} button component={CustomLink}>
      {icon && <ListItemIcon style={{ color: '#fff' }}>{icon}</ListItemIcon>}
      <ListItemText style={{ color: '#fff' }} primary={primary} />
    </ListItem>
  );
};
