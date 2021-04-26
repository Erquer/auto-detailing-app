import React from 'react';
import styled from 'styled-components';
import { MenuContainer } from './menu/MenuContainer';
import { MainContainer } from './app-container/MainContainer';
import './styles.css';

const StyledAppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-flow: row;
  height: 100%;
`;

function App() {
  return (
    <StyledAppContainer>
      <MenuContainer />
      <MainContainer />
    </StyledAppContainer>
  );
}

export default App;
