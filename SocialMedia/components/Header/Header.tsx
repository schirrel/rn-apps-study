import {View} from 'react-native';
import React from 'react';
import style from './Style';
import Notification from '../Notification/Title';
import Title from '../Title/Title';
const Header = ({navigation}: any) => {
  return (
    <View style={style.header}>
      <Title title={"Let's Explore"} />
      <Notification navigation={navigation} />
    </View>
  );
};
export default Header;
