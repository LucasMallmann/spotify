import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';

import GlobalStyles from './styles/globals';

import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar/Sidebar';
import Player from './components/Player/Player';
import Header from './components/Header/Header';

import store from './store';
import Routes from './routes';

console.tron.log('teste');

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
