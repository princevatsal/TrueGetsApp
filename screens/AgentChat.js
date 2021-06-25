import React,{useState} from 'react';
import {View, Text, Image, StyleSheet,ScrollView} from 'react-native';
import logo from '../images/logo_white.png';
import Model1 from '../images/Model1.jpg';
import Model2 from '../images/Model2.jpg';
import Model3 from '../images/Model3.jpg';
export default function AgentChat() {
    const [message,setmessage]=useState("dususus sdubdugdus dusbusiguds dusbuigdus dusbuigudsg  siguidgsud usugdusgusgs")
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Image
            source={logo}
            style={{width: 200, height: 40, alignSelf: 'center'}}
          />
        </View>
      </View>
      <ScrollView style={{marginBottom:'2%'}} showsVerticalScrollIndicator={false}>
        <View style={styles.chattab}>
          <View style={{justifyContent: 'center'}}>
            <Image source={Model1} style={styles.chatimage} />
          </View>
          <View style={styles.textview}>
            <Text style={styles.name}>Sample Name</Text>
            <Text numberOfLines={1} style={styles.message}>
              {message.length < 38
                ? `${message}`
                : `${message.substring(0,35)}...`}
            </Text>
          </View>
        </View>
        <View style={styles.chattab}>
          <View style={{justifyContent: 'center'}}>
            <Image source={Model2} style={styles.chatimage} />
          </View>
          <View style={styles.textview}>
            <Text style={styles.name}>Sample Name</Text>
            <Text numberOfLines={1} style={styles.message}>
              {message.length < 38
                ? `${message}`
                : `${message.substring(0,35)}...`}
            </Text>
          </View>
        </View>
        <View style={styles.chattab}>
          <View style={{justifyContent: 'center'}}>
            <Image source={Model3} style={styles.chatimage} />
          </View>
          <View style={styles.textview}>
            <Text style={styles.name}>Sample Name</Text>
            <Text numberOfLines={1} style={styles.message}>
              {message.length < 38
                ? `${message}`
                : `${message.substring(0,35)}...`}
            </Text>
          </View>
        </View>
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
  chattab: {
    width: '100%',
    height: 90,
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
    borderTopColor: 'black',
    borderTopWidth: 0.7,
    flexDirection: 'row',
    display: 'flex',
  },
  chatimage: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginLeft: '10%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textview: {
    justifyContent: 'center',
    marginRight: '5%',
    marginLeft: '-3%',
  },
  message: {
    fontSize: 16,
  },
});
