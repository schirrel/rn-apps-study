/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import UserPosts from './components/UserPosts/UserPosts';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <UserPosts />
    </SafeAreaView>
  );
}

export default App;
