import React, { lazy } from 'react';
import { Route } from 'react-router';

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

export const MainContainer = () => (
  <React.Suspense fallback="Loading....">
    <Layout>
      <Route path="/" exact component={Dashboard} />
      <Route path="/clients" component={Clients} />
      <Route path="/services" component={Services} />
      <Route path="/history" component={OrderHistory} />
      <Route path="/orders" component={Orders} />
      <Route path="/income" component={Income} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </Layout>
  </React.Suspense>
);
