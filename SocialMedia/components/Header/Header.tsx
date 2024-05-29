import {View} from 'react-native';
import React from 'react';
import style from './Style';
import Notification from '../Notification/Title';
import Title from '../Title/Title';
const Header = () => {
  return (
    <View style={style.header}>
      <Title title={"Let's Explore"} />
      <Notification />
    </View>
  );
};
export default Header;
