import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './Style';
function Notification(): React.JSX.Element {
  return (
    <View>
      <TouchableOpacity style={style.notificationWrapper}>
        <FontAwesomeIcon size={24} icon={faEnvelope} color={'#898dae'} />
        <View style={style.notificationCountContainer}>
          <Text style={style.notificationCount}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Notification;
