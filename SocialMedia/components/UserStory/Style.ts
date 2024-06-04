import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helpers/font';
import {scaleFontSize, verticalScale} from '../../helpers/scaling';

const style = StyleSheet.create({
  userStoryWrapper: {
    marginRight: verticalScale(20),
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    color: '#022150',
    marginTop: verticalScale(5),
    textAlign: 'center',
  },
});

export default style;
