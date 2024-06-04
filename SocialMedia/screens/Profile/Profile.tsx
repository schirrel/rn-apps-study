import {Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../Style';

export default function Profile() {
  return (
    <SafeAreaView
      style={[globalStyles.lightBackground, globalStyles.flexLayout]}>
      <Text>Wellcome to Profile</Text>
    </SafeAreaView>
  );
}
