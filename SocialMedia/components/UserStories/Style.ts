import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../helpers/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(30),
  },
});

export default style;
