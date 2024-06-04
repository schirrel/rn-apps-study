/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import UserPosts from './components/UserPosts/UserPosts';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'red'} />
      <UserPosts />
    </SafeAreaView>
  );
}

export default App;
