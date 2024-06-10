import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helpers/font';
import {horizontalScale, scaleFontSize} from '../../helpers/scaling';

const style = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Inter', '500'),
    color: '#79869f',
    padding: horizontalScale(15),
  },
  titleFocused: {
    fontFamily: getFontFamily('Inter', '600'),
    color: '#022150',
  },
});

export default style;
