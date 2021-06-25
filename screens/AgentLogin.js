import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import logo from '../images/logo_white.png';
import back from '../images/back.png';
import google from '../images/google.png';
import facebook from '../images/fb.png';
export default function AgentLogin({navigation}) {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: '#ff389c',
          height: 70,
          width: '100%',
          display: 'flex',
          flexDirection: 'row-reverse',
        }}>
        <View style={{justifyContent: 'center', flex: 1, marginRight: '35%'}}>
          <Image
            source={logo}
            style={{width: 200, height: 40, alignSelf: 'center'}}
          />
        </View>
        <TouchableOpacity
          style={{justifyContent: 'center', flex: 1, marginLeft: 10}} onPress={()=> navigation.navigate('Login')}>
          <Image source={back} style={{width: 30, height: 20}} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 32,
          marginTop: '5%',
          fontWeight: 'bold',
        }}>
        Agent Login
      </Text>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View
          style={{
            marginTop: '8%',
            paddingHorizontal: '10%',
            flex: 1,
            flexDirection: 'column',
          }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#6e6c69"
            onChangeText={(email)=>setemail(email) }
            value={email}
            keyboardType='email-address'
            style={{
              fontSize: 18,
              paddingLeft: 15,
              color: '#6e6c69',
              height: 55,
              elevation: 3,
              borderRadius: 30,
              backgroundColor: 'white',
              marginTop: '8%',
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#6e6c69"
            onChangeText={(password)=>setpassword(password) }
            value={password}
            style={{
              fontSize: 18,
              paddingLeft: 15,
              color: '#6e6c69',
              height: 55,
              elevation: 3,
              borderRadius: 30,
              backgroundColor: 'white',
              marginTop: '10%',
            }}
          />
        </View>
        <TouchableOpacity style={{}}>
          <Text
            style={{
              fontSize: 14,
              color: '#ff389c',
              paddingLeft:'14%',
              marginTop:'4%'
            }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#ff389c',alignSelf:'center',marginTop:'10%',paddingVertical:10,borderRadius:30,width:'80%'}}>
            <Text style={{textAlign:'center',fontSize:18,color:'white'}}>Login</Text>
        </TouchableOpacity>
        <Text style={{textAlign:'center',fontSize:18,marginVertical:'8%'}}>OR</Text>
        <View>
          <TouchableOpacity style={styles.button}>
            <Image source={google} style={styles.btnImg} />
            <Text style={styles.btnTxt}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Image source={facebook} style={styles.btnImg} />
            <Text style={styles.btnTxt}>Sign in with FaceBook</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
            style={{ marginTop: 20,marginBottom:20 }}
            onPress={()=> navigation.navigate('AgentSignup')}>
            <Text style={{ textAlign: "center", marginLeft: 0, paddingLeft: 0,color:'black'}}>
              Don't Have an Account ? <Text style={{ color: "#E9446A" }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
    marginHorizontal: '10%',
    elevation: 4,
    borderRadius: 30,
  },
  btnImg: {
    height: 30,
    width: 30,
    alignSelf: 'flex-start',
  },
  btnTxt: {
    fontSize: 15,
    textAlign: 'center',
    width: '90%',
    color: '#000000',
    fontFamily: 'Lato-Regular',
  },
  button2: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: '10%',
    marginTop: '3%',
    elevation: 4,
    borderRadius: 30,
    marginBottom:15
  },
});
