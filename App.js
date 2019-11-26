import React from 'react';
import Home from './src/Screens/Home';
import {Provider} from 'react-redux';
import store from './src/_stores/index';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
