import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import logo from '../images/logo_white.png';
import back from '../images/back.png';
import Model1 from '../images/Model2.jpg';
export default function AgentModuleProfile({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Image
            source={logo}
            style={{width: 200, height: 40, alignSelf: 'center'}}
          />
        </View>
      </View>
      <ScrollView
        style={{marginHorizontal: '3%', marginBottom: '5%'}}
        showsVerticalScrollIndicator={false}>
        <Image source={Model1} style={styles.image} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.name}>Senorita</Text>
        </View>
        <Text style={styles.name2}>About Me :</Text>
        <Text style={styles.about}>
          I am a young girl who at such a young age have made me suffer a lot in
          love. I have a strong personality, I believe in loyalty and a great
          sense of humor. I am a romantic girl, and I know how to make every day
          special and romantic things. I am never sad, I am always in a good
          mood
        </Text>
        <Text style={styles.name2}>Hobbies :</Text>
        <Text style={styles.about}>Dancing, Makeup, Shopping</Text>
        <View style={styles.tabs}>
          <Text style={styles.name2}>Age</Text>
          <Text style={styles.about2}>29</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.name2}>Weight</Text>
          <Text style={styles.about2}>60</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.name2}>Waist</Text>
          <Text style={styles.about2}>80</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.name2}>Hips</Text>
          <Text style={styles.about2}>100</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.name2}>Shoe</Text>
          <Text style={styles.about2}>9</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.name2}>Height</Text>
          <Text style={styles.about2}>170</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.name2}>Bust</Text>
          <Text style={styles.about2}>106</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.name2}>Eyes</Text>
          <Text style={styles.about2}>Black</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.name2}>Hair</Text>
          <Text style={styles.about2}>Black</Text>
        </View>
        <TouchableOpacity
          style={styles.logoutbtn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>
            Logout
          </Text>
        </TouchableOpacity>
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
  image: {
    width: '100%',
    height: 400,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 20,
  },
  name: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: '5%',
    marginLeft: '2%',
  },
  name2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
    marginLeft: '2%',
  },
  about: {
    fontSize: 16,
    marginTop: '3%',
    marginLeft: '2%',
    lineHeight: 22,
    marginRight: '2%',
    letterSpacing: 0.3,
  },
  btn: {
    backgroundColor: '#ff389c',
    width: '30%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    borderRadius: 30,
  },
  btntext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  about2: {
    fontSize: 16,
    marginTop: '3%',
    marginLeft: '2%',
    marginRight: '2%',
    alignSelf: 'center',
  },
  logoutbtn: {
    backgroundColor: '#ff389c',
    alignSelf: 'center',
    marginTop: '10%',
    paddingVertical: 10,
    borderRadius: 30,
    width: '80%',
  },
});
