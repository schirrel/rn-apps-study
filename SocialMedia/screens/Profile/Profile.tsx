import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../Style';
import {ScrollView} from 'react-native-gesture-handler';
import UserProfileImage from '../../components/UserProfileImage/UserProfileImage';
import {horizontalScale} from '../../helpers/scaling';
import style from './Style';
import {ProfileTabsNavigation} from '../../navigation/TabNavigator';

ProfileTabsNavigation;
export default function Profile() {
  return (
    <SafeAreaView
      style={[globalStyles.lightBackground, globalStyles.flexLayout]}>
      <ScrollView contentContainerStyle={style.profileContainer}>
        <View style={style.imageWrapper}>
          <UserProfileImage
            borderBolder
            size={horizontalScale(110)}
            profileImage={require('../../assets/images/default_profile.png')}
          />
        </View>
        <Text style={style.userName}> Emmanuel Robertsen</Text>
        <View style={style.userStats}>
          <View>
            <Text style={style.userStatAmount}>45</Text>
            <Text style={style.userStatType}>Following</Text>
          </View>
          <View style={style.userStatDivider} />
          <View>
            <Text style={style.userStatAmount}>30M</Text>
            <Text style={style.userStatType}>Followers</Text>
          </View>
          <View style={style.userStatDivider} />
          <View>
            <Text style={style.userStatAmount}>100</Text>
            <Text style={style.userStatType}>Posts</Text>
          </View>
        </View>
        <View style={globalStyles.flexLayout}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
