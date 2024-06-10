import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../helpers/scaling';

const style = StyleSheet.create({
  profileTab: {
    backgroundColor: '#ffffff',
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScale(150),
    height: verticalScale(90),
    marginTop: verticalScale(10),
  },
});

export default style;
