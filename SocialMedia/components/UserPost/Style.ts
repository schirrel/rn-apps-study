import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helpers/font';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../helpers/scaling';

const style = StyleSheet.create({
  postWrapper: {
    marginHorizontal: horizontalScale(28),
    flexDirection: 'row',
  },
  postContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    paddingBottom: verticalScale(20),
  },
  postUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
    flex: 1,
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    justifyContent: 'center',
    marginVertical: verticalScale(20),
  },
  postStats: {
    flexDirection: 'row',
    marginLeft: horizontalScale(10),
    justifyContent: 'space-around',
  },
  postStat: {
    flexDirection: 'row',
    color: '#79869F',
  },
});

export default style;
