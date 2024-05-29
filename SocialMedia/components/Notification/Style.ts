import {StyleSheet} from 'react-native';
import { getFontFamily } from '../../helpers/font';

const style = StyleSheet.create({
  notificationWrapper: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
    position: 'relative',
  },
  notificationCountContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 16,
    width: 16,
    borderRadius: 10,
    position: 'absolute',
    right: 6,
    top: 8,
  },
  notificationCount: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: getFontFamily('Inter', '600'),
  },
});

export default style;
