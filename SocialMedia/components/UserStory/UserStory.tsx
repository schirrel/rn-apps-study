import React from 'react';
import {Text, View} from 'react-native';
import style from './Style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {IUserStory} from '../../data';
import {horizontalScale} from '../../helpers/scaling';
function UserStory(props: UserStoryProps): React.JSX.Element {
  return (
    <View style={style.userStoryWrapper}>
      <UserProfileImage
        size={horizontalScale(65)}
        profileImage={props.profileImage}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
}

export default UserStory;

interface UserStoryProps extends IUserStory {}
