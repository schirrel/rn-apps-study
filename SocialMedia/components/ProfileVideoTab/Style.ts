import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../helpers/scaling';

const style = StyleSheet.create({
  profileTab: {
    backgroundColor: '#ffffff',
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(4),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: horizontalScale(4),
  },
  image: {
    marginLeft: horizontalScale(10),
    width: horizontalScale(320),
    height: verticalScale(400),
  },
});

export default style;
