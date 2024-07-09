import React from 'react';
import MainStack from './navigations/mainStack';
import {Provider} from 'react-redux';
import Store from './redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <MainStack />
    </Provider>
  );
};

export default App;
