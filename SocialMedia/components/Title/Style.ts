import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helpers/font';
import {scaleFontSize} from '../../helpers/scaling';

const style = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(24),
    fontFamily: getFontFamily('Inter', '600'),
    color: '#022150',
  },
});

export default style;
