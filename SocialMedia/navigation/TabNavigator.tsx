import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native-svg';
import {View} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTab from '../components/ProfileTab/ProfileTab';
import ProfileVideoTab from '../components/ProfileVideoTab/ProfileVideoTab';

const ProfileTabs = createMaterialTopTabNavigator();
const TabComponent = () => {
  return (
    <View>
      <Text> Tab </Text>
    </View>
  );
};

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Photos'}
        component={ProfileTab}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({focused}: {focused: boolean}) => {
            return <ProfileTabTitle isFocused={focused} title={'Photos'} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'Videos'}
        component={ProfileVideoTab}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({focused}: {focused: boolean}) => {
            return <ProfileTabTitle isFocused={focused} title={'Videos'} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        component={ProfileTab}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({focused}: {focused: boolean}) => {
            return <ProfileTabTitle isFocused={focused} title={'Saved'} />;
          },
        }}
      />
    </ProfileTabs.Navigator>
  );
};
