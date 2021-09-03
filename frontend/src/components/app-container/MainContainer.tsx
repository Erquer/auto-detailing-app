import React, {lazy} from 'react';
import { Route } from 'react-router';
import { StyledMainContainer } from './MainContainer.styled';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Clients = lazy(() => import('../clients/Clients'));
export const MainContainer = () => (
        <StyledMainContainer>
            <Route path='/' exact component={Dashboard} />
            <Route path='/clients' exact component={Clients} />
            <Route path='/services'>Tu będą Usługi </Route>
            <Route path='/orders'>Tu będą zamówienia</Route>
        </StyledMainContainer>
);