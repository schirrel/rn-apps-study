import React from 'react';
import {Image, Text, View} from 'react-native';
import style from './Style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {IUserPost} from '../../data';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

function UserPost(props: UserPostProps): React.JSX.Element {
  return (
    <View style={style.postWrapper}>
      <View style={style.postContainer}>
        <View style={style.postUserContainer}>
          <UserProfileImage size={48} profileImage={props.profileImage} />
          <View style={style.userInfo}>
            <Text style={style.userName}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
          <FontAwesomeIcon icon={faEllipsisH} size={22} color={'#79869F'} />
        </View>
        <View style={style.postImage}>
          <Image source={props.image} />
        </View>
        <View style={style.postStats}>
          <View style={style.postStat}>
            <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
            <Text> {props.likes} </Text>
          </View>
          <View style={style.postStat}>
            <FontAwesomeIcon icon={faComment} color={'#79869F'} />
            <Text> {props.comments} </Text>
          </View>
          <View style={style.postStat}>
            <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
            <Text> {props.bookmarks} </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default UserPost;

interface UserPostProps extends IUserPost {}
