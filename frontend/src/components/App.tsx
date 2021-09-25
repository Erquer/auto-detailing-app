import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { MenuContainer } from './menu/MenuContainer';
import { MainContainer } from './app-container/MainContainer';
import '../styles.css';

const StyledAppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 1;
  flex-flow: row;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <StyledAppContainer>
        <MenuContainer />
        <MainContainer />
      </StyledAppContainer>
    </BrowserRouter>
  );
}

export default App;
