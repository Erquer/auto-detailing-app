import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export interface MenuItemLinkProps {
  icon?: JSX.Element;
  primary: string;
  to: string;
}

export const MenuItemLink = ({ icon, primary, to }: MenuItemLinkProps) => {
  const CustomLink = React.useMemo(
    () => React.forwardRef((linkProps, ref) => <Link to={to} {...linkProps} />),
    [to],
  );

  return (
    <ListItem button component={CustomLink}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={primary} />
    </ListItem>
  );
};
