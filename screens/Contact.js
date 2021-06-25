import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import logo from '../images/logo_white.png';
import back from '../images/back.png';
export default function Contact({navigation}) {
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const [message, setmessage] = useState(null);
  return (
    <View style={{flex: 1}}>
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
        Contact Us
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: '5%', marginTop: '5%'}}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#6e6c69"
            onChangeText={name => setname(name)}
            value={name}
            style={styles.inputabs}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#6e6c69"
            onChangeText={email => setemail(email)}
            value={email}
            keyboardType="email-address"
            style={styles.inputabs}
          />
          <TextInput
            placeholder="Message"
            placeholderTextColor="#6e6c69"
            multiline={true}
            numberOfLines={5}
            onChangeText={message => setmessage(message)}
            value={message}
            style={styles.inputabs}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '15%',
            paddingHorizontal: '10%',
          }}>
          <Text style={{fontSize: 18, color: '#38393b'}}>Email</Text>
          <Text style={{fontSize: 18, color: '#ff389c'}}>
            connect@truegets.com
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5%',
            paddingHorizontal: '10%',
          }}>
          <Text style={{fontSize: 18, color: '#38393b'}}>Phone</Text>
          <Text style={{fontSize: 18, color: '#ff389c'}}>+91-9999471022</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5%',
            paddingHorizontal: '10%',
          }}>
          <Text style={{fontSize: 18, color: '#38393b', marginRight: '15%'}}>
            Address
          </Text>
          <Text style={{fontSize: 18, color: '#ff389c', textAlign: 'right'}}>
            195, Street No 3 Sector 104,{'\n'}122006, Gurgaon,{'\n'}Haryana,
            India
          </Text>
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
  inputabs: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#6e6c69',
    height: 55,
    elevation: 3,
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: '8%',
  },
  button: {
    backgroundColor: '#ff389c',
    alignSelf: 'center',
    marginTop: '10%',
    paddingVertical: 10,
    borderRadius: 30,
    width: '90%',
  },
});
