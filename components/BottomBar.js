import React from 'react';

import {StyleSheet, View, Image,TouchableOpacity} from 'react-native';
import home_grey from '../images/home_grey.png';
import home_pink from '../images/home_pink.png';
import chat_grey from '../images/chats_grey.png';
import chat_pink from '../images/chats_pink.png';
import profile_grey from '../images/profile_grey.png';
import profile_pink from '../images/profile_pink.png';
const BotttomBar = ({navigation, active}) => {
  return (
    <View style={styles.bottom}>
      {active == 'Home' ? (
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}><Image source={home_pink} style={{width: 25, height: 25}} /></TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}><Image source={home_grey} style={{width: 25, height: 25}} /></TouchableOpacity>
      )}
      {active == 'Chat' ? (
        <TouchableOpacity onPress={()=> navigation.navigate('Chat')}><Image source={chat_pink} style={{width: 25, height: 25}} /></TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={()=> navigation.navigate('Chat')}><Image source={chat_grey} style={{width: 25, height: 25}} /></TouchableOpacity>
      )}
      {active == 'Profile' ? (
        <TouchableOpacity onPress={()=> navigation.navigate('Profile')}><Image source={profile_pink} style={{width: 25, height: 25}} /></TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={()=> navigation.navigate('Profile')}><Image source={profile_grey} style={{width: 25, height: 25}} /></TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    width: `${100}%`,
    height: 50,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    
  },
});
export default BotttomBar;
