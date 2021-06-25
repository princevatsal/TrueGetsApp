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
import {RadioButton} from 'react-native-paper';
import ModalDropdown from 'react-native-modal-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
export default function AgentSignup({navigation}) {
  const [checked, setChecked] = useState(null);
  const [image,setimage]=useState(null);
  const [video,setvideo]=useState(null);
  const [name,setname]=useState(null);
  const [age,setage]=useState(null);
  const [country,setcountry]=useState(null);
  const [height,setheight]=useState(null);
  const [weight,setweight]=useState(null);
  const [hair,sethair]=useState(null);
  const [waist,setwaist]=useState(null);
  const [hips,sethips]=useState(null);
  const [shoe,setshoe]=useState(null);
  const [bust,setbust]=useState(null);
  const [eyes,seteyes]=useState(null);
  const [hobbies,sethobbies]=useState(null);
  const [mobile,setmobile]=useState(null);
  const [acccount,setaccount]=useState(null);
  const [paypal,setpaypal]=useState(null);
  const [about,setabout]=useState(null);
  const [email,setemail]=useState(null);
  const [password,setpassword]=useState(null);
  const choosephoto=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setimage(image.path)
    });
  }
  const choosevideo=()=>{
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      setvideo(video.path)
    });
  }
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
          marginBottom: 40,
        }}>
        Agent Register
      </Text>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => setChecked('male')}>
            <RadioButton
              value="male"
              color={'#6EABFE'}
              status={checked === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('male')}
            />
            <Text>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => setChecked('female')}>
            <RadioButton
              value="female"
              color={'#6EABFE'}
              status={checked === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('female')}
            />
            <Text>Female</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: '5%',
            paddingHorizontal: '10%',
            flex: 1,
            flexDirection: 'column',
            marginBottom: 40,
          }}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#6e6c69"
            onChangeText={(name)=>setname(name) }
            value={name}
            style={{
              fontSize: 18,
              paddingLeft: 15,
              color: '#6e6c69',
              height: 55,
              elevation: 3,
              borderRadius: 30,
              backgroundColor: 'white',
            }}
          />
          <TextInput
            placeholder="Age"
            placeholderTextColor="#6e6c69"
            keyboardType={'numeric'}
            onChangeText={(age)=>setage(age) }
            value={age}
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
          <View
            style={{
              paddingLeft: 15,
              color: '#6e6c69',
              height: 55,
              elevation: 3,
              borderRadius: 30,
              backgroundColor: 'white',
              marginTop: '8%',
              justifyContent: 'center',
            }}>
            <ModalDropdown
              onSelect={(country)=>setcountry(country) }
              options={['option1', 'option2','option3','option4','option5']}
              textStyle={{fontSize: 18, color: '#6e6c69'}}
              defaultValue="Country"
              dropdownTextStyle={{fontSize: 18, color: '#6e6c69'}}
              dropdownStyle={{width: '75%',marginTop:'5%',borderRadius:30,elevation:4}}
            />
          </View>
          <TextInput
            placeholder="Height"
            placeholderTextColor="#6e6c69"
            keyboardType='numeric'
            onChangeText={(height)=>setheight(height) }
            value={height}
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
            placeholder="Weight"
            placeholderTextColor="#6e6c69"
            keyboardType='numeric'
            onChangeText={(weight)=>setweight(weight) }
            value={weight}
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
          {checked=='female'?<TextInput
            placeholder="Hair"
            placeholderTextColor="#6e6c69"
            onChangeText={(hair)=>sethair(hair) }
            value={hair}
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
          />:<View></View>}
          {checked=='female'?<TextInput
            placeholder="Waist"
            placeholderTextColor="#6e6c69"
            keyboardType='numeric'
            onChangeText={(waist)=>setwaist(waist) }
            value={waist}
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
          />:<View></View>}
          {checked=='female'?<TextInput
            placeholder="Hips"
            placeholderTextColor="#6e6c69"
            keyboardType='numeric'
            onChangeText={(hips)=>sethips(hips) }
            value={hips}
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
          />:<View></View>}
          {checked=='female'?<TextInput
            placeholder="Shoe"
            placeholderTextColor="#6e6c69"
            keyboardType='numeric'
            onChangeText={(shoe)=>setshoe(shoe) }
            value={shoe}
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
          />:<View></View>}
          {checked=='female'?<TextInput
            placeholder="Bust"
            placeholderTextColor="#6e6c69"
            keyboardType='numeric'
            onChangeText={(bust)=>setbust(bust) }
            value={bust}
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
          />:<View></View>}
          {checked=='female'?<TextInput
            placeholder="Eyes"
            placeholderTextColor="#6e6c69"
            onChangeText={(eyes)=>seteyes(eyes) }
            value={eyes}
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
          />:<View></View>}
          <TextInput
            placeholder="Hobbies"
            placeholderTextColor="#6e6c69"
            multiline={true}
            onChangeText={(hobbies)=>sethobbies(hobbies) }
            value={hobbies}
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
            placeholder="Mobile"
            placeholderTextColor="#6e6c69"
            keyboardType='phone-pad'
            onChangeText={(mobile)=>setmobile(mobile) }
            value={mobile}
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
            placeholder="Account Info"
            placeholderTextColor="#6e6c69"
            onChangeText={(account)=>setaccount(acccount) }
            value={acccount}
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
            placeholder="Paypal ID"
            placeholderTextColor="#6e6c69"
            onChangeText={(paypal)=>setpaypal(paypal) }
            value={paypal}
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
          <TouchableOpacity onPress={choosephoto} style={{
              paddingLeft: 15,
              color: '#6e6c69',
              height: 55,
              elevation: 3,
              borderRadius: 30,
              backgroundColor: 'white',
              marginTop: '8%',
              justifyContent: 'center'
            }}>
          <Text style={{color:'#6e6c69',fontSize:18}}>Image</Text>
          </TouchableOpacity>
          <Image source={{uri:image}} style={{width:300,height:300,marginTop:'5%',alignSelf:'center'}}/>
          <TouchableOpacity onPress={choosevideo} style={{
              paddingLeft: 15,
              color: '#6e6c69',
              height: 55,
              elevation: 3,
              borderRadius: 30,
              backgroundColor: 'white',
              marginTop: '8%',
              justifyContent: 'center'
            }}>
          <Text style={{color:'#6e6c69',fontSize:18}}>Video</Text>
          </TouchableOpacity>
          <Video source={{uri: video}} style={{width:300,height:300,marginTop:'5%',alignSelf:'center'}}/>
          <TextInput
            placeholder="About Me"
            placeholderTextColor="#6e6c69"
            onChangeText={(about)=>setabout(about) }
            value={about}
            multiline={true}
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
              marginTop: '8%',
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#ff389c',
            alignSelf: 'center',
            marginTop: '10%',
            paddingVertical: 10,
            borderRadius: 30,
            width: '80%',
          }} onPress={()=> navigation.navigate('AgentContainer')}>
          <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>
            Signup
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', fontSize: 18, marginVertical: '8%'}}>
          OR
        </Text>
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
        <TouchableOpacity style={{marginTop: 20, marginBottom: 20}} onPress={()=> navigation.navigate('AgentLogin')}>
          <Text
            style={{
              textAlign: 'center',
              marginLeft: 0,
              paddingLeft: 0,
              color: 'black',
            }}>
            Have an Account ? <Text style={{color: '#E9446A'}}>Login</Text>
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
    marginBottom: 15,
    marginHorizontal: '10%',
    marginTop: '5%',
    elevation: 4,
    borderRadius: 30,
  },
});
