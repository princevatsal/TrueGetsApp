import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import logo from '../images/logo_white.png';
import male from '../images/male.png';
import BottomBar from '../components/BottomBar';
import Subscription from '../images/subscription.png';
import Privacy from '../images/privacy-policy.png';
import Contact from '../images/conttact.png';
import About from '../images/About.png';
import Terms from '../images/terms-conditions.png';
export default function Profile({navigation}) {
  return (
    <>
    <SafeAreaView style={{flex:1}}> 
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.header}>
          <View style={{justifyContent: 'center', flex: 1}}>
            <Image
              source={logo}
              style={{width: 200, height: 40, alignSelf: 'center'}}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: '5%',
              color: '#38393b',
            }}>
            My Profile
          </Text>
        </View>
        <View>
          <Image
            source={male}
            style={{
              width: 120,
              height: 120,
              alignSelf: 'center',
              marginTop: '5%',
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              marginTop: '5%',
              marginBottom: 20,
            }}>
            Sarthak Gupta
          </Text>
        </View>
        <ScrollView
          style={{width: '100%', height: '100%'}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.tabs}>
            <Text style={styles.tabtext}>Email</Text>
            <Text style={styles.tabtext}>sarthakguptamailbox@gmail.com</Text>
          </View>
          <View style={styles.tabs}>
            <Text style={styles.tabtext}>Username</Text>
            <Text style={styles.tabtext}>Skg</Text>
          </View>
          <View style={styles.tabs}>
            <Text style={styles.tabtext}>Phone</Text>
            <Text style={styles.tabtext}>8923080510</Text>
          </View>
          <View style={styles.tabs}>
            <Text style={styles.tabtext}>Package</Text>
            <Text style={styles.tabtext}>Basic</Text>
          </View>
          <View style={styles.tabs}>
            <Text style={styles.tabtext}>Credits</Text>
            <Text style={styles.tabtext}>100</Text>
          </View>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => navigation.navigate('Subscriptions')}>
            <Text style={styles.tabtext}>Subscriptions</Text>
            <Image
              style={{
                width: 25,
                height: 25,
                alignSelf: 'center',
                marginRight: 10,
              }}
              source={Subscription}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => navigation.navigate('About')}>
            <Text style={styles.tabtext}>About Us</Text>
            <Image
              style={{
                height: 25,
                width: 25,
                alignSelf: 'center',
                marginRight: 10,
              }}
              source={About}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.tabtext}>Contact Us</Text>
            <Image
              style={{
                height: 25,
                width: 25,
                alignSelf: 'center',
                marginRight: 10,
              }}
              source={Contact}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => navigation.navigate('Terms')}>
            <Text style={styles.tabtext}>Terms & Conditions</Text>
            <Image
              style={{
                height: 25,
                width: 25,
                alignSelf: 'center',
                marginRight: 10,
              }}
              source={Terms}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => navigation.navigate('Privacy')}>
            <Text style={styles.tabtext}>Privacy Policy</Text>
            <Image
              style={{
                height: 25,
                width: 25,
                alignSelf: 'center',
                marginRight: 10,
              }}
              source={Privacy}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutbtn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      </SafeAreaView>
      <BottomBar active={'Profile'} navigation={navigation} />
    </>
  );
}
const styles = StyleSheet.create({
  tabs: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '4%',
    flexDirection: 'row',
    height: 50,
    elevation: 4,
    width: '90%',
    backgroundColor: '#f2f2f2',
    alignSelf: 'center',
    borderRadius: 30,
    flex: 1,
    marginBottom: 20,
  },
  tabtext: {
    fontSize: 18,
    textAlignVertical: 'center',
    paddingHorizontal: 15,
    color: '#4d4f4d',
  },
  header: {
    backgroundColor: '#ff389c',
    height: 70,
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  logoutbtn: {
    backgroundColor: '#ff389c',
    alignSelf: 'center',
    marginTop: '10%',
    paddingVertical: 10,
    borderRadius: 30,
    width: '80%',
    marginBottom: 20,
  },
});
