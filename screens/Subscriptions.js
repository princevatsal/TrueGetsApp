import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import logo from '../images/logo_white.png';
import back from '../images/back.png';
export default function Subscriptions({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <View style={{justifyContent: 'center', flex: 1, marginRight: '35%'}}>
          <Image
            source={logo}
            style={{width: 200, height: 40, alignSelf: 'center'}}
          />
        </View>
        <TouchableOpacity
          style={{justifyContent: 'center', flex: 1, marginLeft: 10}}
          onPress={() => navigation.navigate('Home')}>
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
          Subscriptions
        </Text>
      <ScrollView style={{marginTop: '10%',height:'100%',width:'100%'}} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.cardheader}>
            <Text style={styles.plan}>Basic</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Duration</Text>
            <Text style={styles.benfitstext}>7 Days</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Credits</Text>
            <Text style={styles.benfitstext}>100</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Profiles</Text>
            <Text style={styles.benfitstext}>5</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Pricing</Text>
            <Text style={styles.benfitstext}>50$</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>{
            Alert.alert(
              "Thank You !",
              "",
              [
                {
                  text: "Ok",
                  onPress: () => navigation.navigate('Chat'),
                  style: "ok",
                },
              ],
            );
          }}>
              <Text style={styles.buttontext}>Select Pack</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardheader}>
            <Text style={styles.plan}>Standard</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Duration</Text>
            <Text style={styles.benfitstext}>15 Days</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Credits</Text>
            <Text style={styles.benfitstext}>200</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Profiles</Text>
            <Text style={styles.benfitstext}>12</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Pricing</Text>
            <Text style={styles.benfitstext}>100$</Text>
          </View>
          <TouchableOpacity style={styles.button}onPress={()=>{
            Alert.alert(
              "Thank You !",
              "",
              [
                {
                  text: "Ok",
                  onPress: () => navigation.navigate('Chat'),
                  style: "ok",
                },
              ],
            );
          }}>
              <Text style={styles.buttontext}>Select Pack</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardheader}>
            <Text style={styles.plan}>Premium</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Duration</Text>
            <Text style={styles.benfitstext}>25 Days</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Credits</Text>
            <Text style={styles.benfitstext}>400</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Profiles</Text>
            <Text style={styles.benfitstext}>30</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Pricing</Text>
            <Text style={styles.benfitstext}>200$</Text>
          </View>
          <TouchableOpacity style={styles.button}onPress={()=>{
            Alert.alert(
              "Thank You !",
              "",
              [
                {
                  text: "Ok",
                  onPress: () => navigation.navigate('Chat'),
                  style: "ok",
                },
              ],
            );
          }}>
              <Text style={styles.buttontext}>Select Pack</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardheader}>
            <Text style={styles.plan}>Pro</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Duration</Text>
            <Text style={styles.benfitstext}>40 Days</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Credits</Text>
            <Text style={styles.benfitstext}>700</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Profiles</Text>
            <Text style={styles.benfitstext}>45</Text>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benfitstext}>Pricing</Text>
            <Text style={styles.benfitstext}>350$</Text>
          </View>
          <TouchableOpacity style={styles.button}onPress={()=>{
            Alert.alert(
              "Thank You !",
              "",
              [
                {
                  text: "Ok",
                  onPress: () => navigation.navigate('Chat'),
                  style: "ok",
                },
              ],
            );
          }}>
              <Text style={styles.buttontext}>Select Pack</Text>
          </TouchableOpacity>
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
  card: {
    width: '85%',
    height:380,
    alignSelf: 'center',
    elevation: 4,
    backgroundColor: 'white',
    marginBottom:30
  },
  plan:{
    textAlign:'center',fontSize:24,color:'white',alignSelf:'center',fontWeight:'bold'
  },
  benefits:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:'7%',
      paddingHorizontal:'5%'
    },
    benfitstext:{
        fontSize:20,
        fontWeight:'bold',
        color:'#38393b'
    },
    button:{
        marginTop:'10%',backgroundColor:'#ff389c',width:'85%',height:50,alignSelf:'center',justifyContent:'center'
    },
    buttontext:{
        color:'white',fontSize:18,fontWeight:'bold',textAlign:'center'
    },
    cardheader:{
        height:'15%',backgroundColor:'#ff389c',justifyContent:'center'
    }
});
