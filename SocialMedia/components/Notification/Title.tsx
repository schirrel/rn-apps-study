import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './Style';
import {Routes} from '../../navigation/routes';
function Notification({navigation}: any): React.JSX.Element {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.Profile as never);
        }}
        style={style.notificationWrapper}>
        <FontAwesomeIcon size={24} icon={faEnvelope} color={'#898dae'} />
        <View style={style.notificationCountContainer}>
          <Text style={style.notificationCount}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Notification;
