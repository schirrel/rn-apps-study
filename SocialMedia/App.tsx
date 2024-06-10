/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
export default App;
