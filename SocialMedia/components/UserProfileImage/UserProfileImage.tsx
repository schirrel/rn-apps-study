import {Image, View} from 'react-native';
import React from 'react';
import style from './Style';
import {TouchableOpacity} from 'react-native-gesture-handler';
const UserProfileImage = (props: UserProfileImageProps) => {
  return (
    <TouchableOpacity>
      <View style={[style.imageWrapper, {borderRadius: props.size}]}>
        <Image
          source={props.profileImage}
          style={{width: props.size, height: props.size}}
        />
      </View>
    </TouchableOpacity>
  );
};
export default UserProfileImage;

interface UserProfileImageProps {
  profileImage: any;
  size: number;
}
