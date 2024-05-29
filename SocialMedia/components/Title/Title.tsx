import {Text, View} from 'react-native';
import React from 'react';
import style from './Style';
const Title = (props: TitleProps) => {
  return (
    <View>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
};
export default Title;

interface TitleProps {
  title: string;
}
