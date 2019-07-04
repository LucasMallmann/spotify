import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
// import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .connect()
    .use(reactotronRedux());

  tron.clear();

  console.tron = tron;
}
