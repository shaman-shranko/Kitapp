/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import  store  from "./reducers"
import { NavigationContainer } from '@react-navigation/native';
import CommonNavigation from './navigation/common.navigation';


const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <CommonNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
