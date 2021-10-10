import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MenuContainer } from './Menu/MenuContainer';
import { MainContainer } from './app-container/MainContainer';
import '../styles.css';
import reduxStore from '../store/store';

const StyledAppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 1;
  flex-flow: row;
  height: 100vh;
`;

function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <StyledAppContainer>
          <MenuContainer />
          <MainContainer />
        </StyledAppContainer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
