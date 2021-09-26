import React, { lazy } from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import reduxStore from '../../store/store';
import Layout from './Layout/Layout';

const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Clients = lazy(() => import('../pages/Clients/Clients'));
const Login = lazy(() => import('../pages/Login/Login'));
const Orders = lazy(() => import('../pages/Orders/Orders'));
const Services = lazy(() => import('../pages/Services/Services'));

export const MainContainer = () => (
  <React.Suspense fallback="Loading....">
    <Layout>
      <Provider store={reduxStore}>
        <Route path="/" exact component={Dashboard} />
        <Route path="/clients" component={Clients} />
        <Route path="/services" component={Services} />
        <Route path="/orders" component={Orders} />
        <Route path="/login" component={Login} />
      </Provider>
    </Layout>
  </React.Suspense>
);
