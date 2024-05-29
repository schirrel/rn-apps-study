import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helpers/font';

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: getFontFamily('Inter', '600'),
    color: '#022150',
  },
});

export default style;
