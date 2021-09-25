import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface MenuItemLinkProps {
  icon?: JSX.Element;
  primary: string;
  to: string;
}

export const MenuItemLink = ({ icon, primary, to }: MenuItemLinkProps) => {
  const CustomLink = React.useMemo(
    () => React.forwardRef((linkProps) => <Link to={to} {...linkProps} />),
    [to],
  );

  return (
    <ListItem button component={CustomLink}>
      {icon && <ListItemIcon style={{ color: '#fff' }}>{icon}</ListItemIcon>}
      <ListItemText style={{ color: '#fff' }} primary={primary} />
    </ListItem>
  );
};
