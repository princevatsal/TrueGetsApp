import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import logo from '../images/logo_white.png';
import back from '../images/back.png';
import google from '../images/google.png';
import facebook from '../images/fb.png';
import {RadioButton} from 'react-native-paper';
export default function UserSignup({navigation}) {
    const [checked,setChecked]=useState(null);
    const [username,setusername]=useState(null);
    const [firstname,setfirstname]=useState(null);
    const [lastname,setlastname]=useState(null);
    const [email,setemail]=useState(null);
    const [password,setpassword]=useState(null);
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
          marginBottom:'8%'
        }}>
        User Register
      </Text>
      <ScrollView style={{width:'100%',height:'100%'}}>
        <View style={{paddingHorizontal:'10%',flex:1,flexDirection:'column',marginBottom:40}}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#6e6c69"
            onChangeText={(username)=>setusername(username) }
            value={username}
            style={{
              fontSize: 18,
              paddingLeft: 15,
              color: '#6e6c69',
              height: 55,
              elevation: 3,
              borderRadius: 30,
              backgroundColor: 'white',
            }}/>
            <TextInput
            placeholder="First Name"
            placeholderTextColor="#6e6c69"
            onChangeText={(firstname)=> setfirstname(firstname)}
            value={firstname}
            style={{
              fontSize: 18,
              paddingLeft: 15,
              color: '#6e6c69',
              height: 55,
              elevation: 3,
              borderRadius: 30,
              backgroundColor: 'white',
              marginTop:'8%'
            }}/>
            <TextInput
            placeholder="Second name"
            placeholderTextColor="#6e6c69"
            onChangeText={(lastname)=>setlastname(lastname) }
            value={lastname}
            style={{
              fontSize: 18,
              paddingLeft: 15,
              color: '#6e6c69',
              height: 55,
              elevation: 3,
              borderRadius: 30,
              backgroundColor: 'white',
              marginTop:'8%'
            }}/>
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
              marginTop:'8%'
            }}/>
            <TextInput
            onChangeText={(password)=>setpassword(password) }
            value={password}
            placeholder="Password"
            placeholderTextColor="#6e6c69"
            style={{
              fontSize: 18,
              paddingLeft: 15,
              color: '#6e6c69',
              height: 55,
              elevation: 3,
              borderRadius: 30,
              backgroundColor: 'white',
              marginTop:'8%'
            }}/>
        </View>
        <View style={{display:'flex',justifyContent: 'space-around',flexDirection:'row'}}>
        <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center'}} onPress={() => setChecked('male')}>
        <RadioButton
            value="male"
            color={'#6EABFE'}
            status={checked === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('male')}
        />
        <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center'}} onPress={() => setChecked('female')}>
        <RadioButton
            value="female"
            color={'#6EABFE'}
            status={checked === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('female')}
        />
        <Text>Female</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={{backgroundColor:'#ff389c',alignSelf:'center',marginTop:'10%',paddingVertical:10,borderRadius:30,width:'80%'}} onPress={()=> navigation.navigate('AppStack')}>
            <Text style={{textAlign:'center',fontSize:18,color:'white'}}>Signup</Text>
        </TouchableOpacity>
        <Text style={{textAlign:'center',fontSize:18,marginVertical:'8%'}}>OR</Text>
        <View>
        <TouchableOpacity style={styles.button}>
            <Image source={google} style={styles.btnImg} />
            <Text style={styles.btnTxt}>Sign up with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Image source={facebook} style={styles.btnImg} />
            <Text style={styles.btnTxt}>Sign up with FaceBook</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
            style={{ marginTop: 20,marginBottom:20 }}
            onPress={()=> navigation.navigate('UserLogin')}>
            <Text style={{ textAlign: "center", marginLeft: 0, paddingLeft: 0,color:'black'}}>
              Have an Account ? <Text style={{ color: "#E9446A" }}>Log in</Text>
            </Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
    button: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
    marginHorizontal:'10%',
    elevation:4,
    borderRadius:30,
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
    marginBottom: 15,
    marginHorizontal:'10%',
    marginTop:'5%',
    elevation:4,
    borderRadius:30,
  }})
