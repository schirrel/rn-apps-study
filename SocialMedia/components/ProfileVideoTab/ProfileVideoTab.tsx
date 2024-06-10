import {Image, View} from 'react-native';
import React from 'react';
import style from './Style';
import {ScrollView} from 'react-native-gesture-handler';
const ProfileVideoTab = () => {
  return (
    <ScrollView style={style.profileTab} showsVerticalScrollIndicator={false}>
      <View style={style.profileTabContent}>
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};
export default ProfileVideoTab;
