import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from './routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
}
