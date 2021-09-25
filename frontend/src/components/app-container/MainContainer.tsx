import React, { lazy } from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import reduxStore from '../../store/store';
import Layout from './Layout/Layout';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Clients = lazy(() => import('../Clients/Clients'));
const Login = lazy(() => import('../LoginPage/LoginPage'));

export const MainContainer = () => (
  <React.Suspense fallback="Loading....">
    <Layout>
      <Provider store={reduxStore}>
        <Route path="/" exact component={Dashboard} />
        <Route path="/clients" component={Clients} />
        <Route path="/services">Tu będą Usługi </Route>
        <Route path="/orders">Tu będą zamówienia</Route>
        <Route path="/login" component={Login} />
      </Provider>
    </Layout>
  </React.Suspense>
);
