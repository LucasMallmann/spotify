import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/globals';

import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar/Sidebar';
import Player from './components/Player/Player';
import Header from './components/Header/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyles />
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
