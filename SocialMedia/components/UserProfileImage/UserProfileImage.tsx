import {Image, View} from 'react-native';
import React from 'react';
import style from './Style';
const UserProfileImage = (props: UserProfileImageProps) => {
  return (
    <View style={[style.imageWrapper, {borderRadius: props.size}]}>
      <Image
        source={props.profileImage}
        style={{width: props.size, height: props.size}}
      />
    </View>
  );
};
export default UserProfileImage;

interface UserProfileImageProps {
  profileImage: any;
  size: number;
}
