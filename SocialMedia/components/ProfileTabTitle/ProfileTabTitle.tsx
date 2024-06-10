import {Text, View} from 'react-native';
import React from 'react';
import style from './Style';
const ProfileTabTitle = (props: ProfileTabTitleProps) => {
  return (
    <View>
      <Text style={[style.title, props.isFocused && style.titleFocused]}>
        {props.title}
      </Text>
    </View>
  );
};
export default ProfileTabTitle;

interface ProfileTabTitleProps {
  title: string;
  isFocused: boolean;
}
