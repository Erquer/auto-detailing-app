import React from 'react';
import { Route } from 'react-router';
import { Dashboard } from './dashboard/Dashboard';
import { StyledMainContainer } from './MainContainer.styled';
export const MainContainer = () => {

    return (
        <StyledMainContainer>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/clients'>Tu będą clienci</Route>
            <Route path='/services'>Tu będą Usługi </Route>
            <Route path='/orders'>Tu będą zamówienia</Route>
        </StyledMainContainer>
    )
}