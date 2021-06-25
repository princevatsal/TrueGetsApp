import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
import logo from '../images/logo_white.png';
import back from '../images/back.png';
export default function About({navigation}) {
  return (
    <View>
      <View style={styles.header}>
        <View style={{justifyContent: 'center', flex: 1, marginRight: '35%'}}>
          <Image
            source={logo}
            style={{width: 200, height: 40, alignSelf: 'center'}}
          />
        </View>
        <TouchableOpacity
          style={{justifyContent: 'center', flex: 1, marginLeft: 10}}
          onPress={() => navigation.navigate('Profile')}>
          <Image source={back} style={{width: 30, height: 20}} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: '5%',
          color: '#38393b',
        }}>
        About Us
      </Text>
      <ScrollView style={{paddingHorizontal:'7%',paddingVertical:'5%',height:'100%',marginTop:'5%'}}>
        <Text style={{fontSize:18,textAlign:'center',textAlignVertical:'center',lineHeight:28,letterSpacing:0.7}}>
          TRUEGETS, A world where everyone is the same yet unique. Sharing your
          world with others in order to achieve greater values, true beliefs and
          excellent behaviors. Making socialization easier from your mobile or
          PC. A NEW world where we all share in the development of each other's
          (sub) cultures. Socialization is a process that you go through your
          entire life. And with the influence of the internet, we want to make a
          positive contribution. Come and join us. From life coaches to praying
          groups. From wild life vlogger to entertainment. Everyone with their
          own dreams and talent’s. Let’s SPREAD POSITIVITY!
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff389c',
    height: 70,
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
});
