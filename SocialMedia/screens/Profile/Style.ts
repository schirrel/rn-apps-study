import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../helpers/scaling';
import {getFontFamily} from '../../helpers/font';

const style = StyleSheet.create({
  profileContainer: {
    flexGrow: 1,
  },
  imageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  userName: {
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(20),
    marginTop: 20,
  },
  userStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  userStatAmount: {
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
  },
  userStatType: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    color: '#78969F',
  },
  userStatDivider: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  userDivider: {
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
});

export default style;
