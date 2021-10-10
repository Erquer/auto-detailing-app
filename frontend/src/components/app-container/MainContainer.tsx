import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import { loadUserFromLocalStorage } from '../../store/slices/userSlice/user';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Layout from './Layout/Layout';

const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Clients = lazy(() => import('../pages/Clients/Clients'));
const Orders = lazy(() => import('../pages/Orders/Orders'));
const Login = lazy(() => import('../pages/Login/Login'));
const Logout = lazy(() => import('../pages/Logout/Logout'));
const Services = lazy(() => import('../pages/Services/Services'));
const OrderHistory = lazy(
  () => import('../pages/OrderHistory/OrderHistoryPage'),
);
const Income = lazy(() => import('../pages/Income/Income'));

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('read');
    dispatch(loadUserFromLocalStorage());
  }, []);

  return (
    <React.Suspense fallback="Loading....">
      <Layout>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <ProtectedRoute path="/clients" component={Clients} />
        <ProtectedRoute path="/services" component={Services} />
        <ProtectedRoute path="/history" component={OrderHistory} />
        <ProtectedRoute path="/orders" component={Orders} />
        <ProtectedRoute path="/income" component={Income} />
        <ProtectedRoute path="/income" component={Income} />
        <ProtectedRoute path="/" exact component={Dashboard} />
      </Layout>
    </React.Suspense>
  );
};

export default MainContainer;
