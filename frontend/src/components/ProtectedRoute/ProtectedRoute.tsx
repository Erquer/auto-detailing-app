import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { RootState } from '../../store/slices/rootReducer';

const ProtectedRoute = ({ ...routeProps }: RouteProps) => {
  const isLogged = useSelector((state: RootState) => state.user.isLogged);

  return isLogged ? (
    <Route {...routeProps} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
};

export default ProtectedRoute;
