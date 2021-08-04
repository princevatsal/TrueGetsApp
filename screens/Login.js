import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground} from 'react-native';
import logo from '../images/logo_white.png';
import background from '../images/background2.jpg'
export default function Login({navigation}) {
  return (
    <View>
      <View style={{backgroundColor: '#ff389c', height: 70, width: '100%'}}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Image
            source={logo}
            style={{width: 200, height: 40, alignSelf: 'center'}}
          />
        </View>
      </View>
      <ImageBackground source={background} style={{width:'100%',height:'100%'}}>
      <View style={{paddingHorizontal: 25, paddingVertical: 70,}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingVertical: 40,
            borderRadius: 17,
            opacity:0.8
          }}>
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: '#ff389c',
              justifyContent: 'center',
              borderRadius: 40,
            }} onPress={()=> navigation.navigate('UserLogin')}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold',color:'white'}}>
              User Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: '#ff389c',
              justifyContent: 'center',
              borderRadius: 40,
              marginTop: '7%',
            }} onPress={()=> navigation.navigate('UserSignup')}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold',color:'white'}}>
              User Signup
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingVertical: 40,
            borderRadius: 17,
            opacity:0.8,
            marginTop:'15%'
          }}>
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: '#ff389c',
              justifyContent: 'center',
              borderRadius: 40,
            }} onPress={()=> navigation.navigate('AgentLogin')}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold',color:'white'}}>
              Agent Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: '#ff389c',
              justifyContent: 'center',
              borderRadius: 40,
              marginTop: '7%',
            }} onPress={()=> navigation.navigate('AgentSignup')}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold',color:'white'}}>
              Model Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}
