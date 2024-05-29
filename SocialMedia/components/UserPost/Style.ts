import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helpers/font';

const style = StyleSheet.create({
  postWrapper: {
    marginHorizontal: 28,
    flexDirection: 'row',
  },
  postContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    paddingBottom: 20,
  },
  postUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    justifyContent: 'center',
    marginVertical: 20,
  },
  postStats: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  postStat: {
    flexDirection: 'row',
    color: '#79869F',
  },
});

export default style;
