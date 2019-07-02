import React, { Fragment } from 'react';

import GlobalStyles from './styles/globals';

import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Sidebar />
    </Fragment>
  );
}

export default App;
