import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helpers/font';

const style = StyleSheet.create({
  userStoryWrapper: {
    marginRight: 20,
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    color: '#022150',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default style;
