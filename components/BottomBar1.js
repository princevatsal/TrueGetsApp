import React from 'react';
import {StyleSheet, View, Image,TouchableOpacity} from 'react-native';
import chat_grey from '../images/chats_grey.png';
import chat_pink from '../images/chats_pink.png';
import profile_grey from '../images/profile_grey.png';
import profile_pink from '../images/profile_pink.png';
const BotttomBar1 = ({navigation, active}) => {
  return (
    <View style={styles.bottom}>
      {active == 'Chat' ? (
        <TouchableOpacity onPress={()=> navigation.navigate('AgentChat')}><Image source={chat_pink} style={{width: 25, height: 25}} /></TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={()=> navigation.navigate('AgentChat')}><Image source={chat_grey} style={{width: 25, height: 25}} /></TouchableOpacity>
      )}
      {active == 'Profile' ? (
        <TouchableOpacity onPress={()=> navigation.navigate('AgentModuleProfile')}><Image source={profile_pink} style={{width: 25, height: 25}} /></TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={()=> navigation.navigate('AgentModuleProfile')}><Image source={profile_grey} style={{width: 25, height: 25}} /></TouchableOpacity>
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
export default BotttomBar1;
