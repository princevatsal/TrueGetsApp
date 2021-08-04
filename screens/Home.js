import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import logo from '../images/logo_white.png';
import chat_grey from '../images/chats_grey.png';
import Model1 from '../images/Model1.jpg';
import Model2 from '../images/Model2.jpg';
import Model3 from '../images/Model3.jpg';
import Model4 from '../images/Model4.jpg';
import Model5 from '../images/Model5.jpg';
import Model6 from '../images/Model6.jpg';
import Model7 from '../images/Model7.jpg';
import Model8 from '../images/Model8.jpg';
import BottomBar from '../components/BottomBar';
export default function Home({navigation}) {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainCont}>
          <View
            style={{
              backgroundColor: '#ff389c',
              height: 70,
              width: '100%',
              display: 'flex',
              flexDirection: 'row-reverse',
            }}>
            <View style={{justifyContent: 'center', flex: 1}}>
              <Image
                source={logo}
                style={{width: 200, height: 40, alignSelf: 'center'}}
              />
            </View>
          </View>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <View style={styles.profileTabCont}>
                <TouchableOpacity style={styles.profileTab} onPress={()=> navigation.navigate('AgentProfile')}>
                  <ImageBackground style={styles.profileImgTab} source={Model2}>
                    <View style={styles.agentOptions}>
                      <Text style={styles.agentName}>Seniorita ✨</Text>
                      <TouchableOpacity
                        style={styles.chatBtn}
                        onPress={() => navigation.navigate('AuthStack')}>
                        <Image
                          source={chat_grey}
                          style={{width: 25, height: 25}}
                        />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileTab} onPress={()=> navigation.navigate('AgentProfile')}>
                  <ImageBackground style={styles.profileImgTab} source={Model1}>
                    <View style={styles.agentOptions}>
                      <Text style={styles.agentName}>Rita ✨</Text>
                      <TouchableOpacity
                        style={styles.chatBtn}
                        onPress={() => navigation.navigate('AuthStack')}>
                        <Image
                          source={chat_grey}
                          style={{width: 25, height: 25}}
                        />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.profileTabCont}>
                <TouchableOpacity style={styles.profileTab} onPress={()=> navigation.navigate('AgentProfile')}>
                  <ImageBackground style={styles.profileImgTab} source={Model3}>
                    <View style={styles.agentOptions}>
                      <Text style={styles.agentName}>Lilly ✨</Text>
                      <TouchableOpacity
                        style={styles.chatBtn}
                        onPress={() => navigation.navigate('AuthStack')}>
                        <Image
                          source={chat_grey}
                          style={{width: 25, height: 25}}
                        />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileTab} onPress={()=> navigation.navigate('AgentProfile')}>
                  <ImageBackground style={styles.profileImgTab} source={Model4}>
                    <View style={styles.agentOptions}>
                      <Text style={styles.agentName}>Beatriz ✨</Text>
                      <TouchableOpacity
                        style={styles.chatBtn}
                        onPress={() => navigation.navigate('AuthStack')}>
                        <Image
                          source={chat_grey}
                          style={{width: 25, height: 25}}
                        />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.profileTabCont}>
                <TouchableOpacity style={styles.profileTab} onPress={()=> navigation.navigate('AgentProfile')}>
                  <ImageBackground style={styles.profileImgTab} source={Model5}>
                    <View style={styles.agentOptions}>
                      <Text style={styles.agentName}>Penelope ✨</Text>
                      <TouchableOpacity
                        style={styles.chatBtn}
                        onPress={() => navigation.navigate('AuthStack')}>
                        <Image
                          source={chat_grey}
                          style={{width: 25, height: 25}}
                        />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileTab} onPress={()=> navigation.navigate('AgentProfile')}>
                  <ImageBackground style={styles.profileImgTab} source={Model6}>
                    <View style={styles.agentOptions}>
                      <Text style={styles.agentName}>Josephine ✨</Text>
                      <TouchableOpacity
                        style={styles.chatBtn}
                        onPress={() => navigation.navigate('AuthStack')}>
                        <Image
                          source={chat_grey}
                          style={{width: 25, height: 25}}
                        />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.profileTabCont}>
                <TouchableOpacity style={styles.profileTab} onPress={()=> navigation.navigate('AgentProfile')}>
                  <ImageBackground style={styles.profileImgTab} source={Model7}>
                    <View style={styles.agentOptions}>
                      <Text style={styles.agentName}>Shira ✨</Text>
                      <TouchableOpacity
                        style={styles.chatBtn}
                        onPress={() => navigation.navigate('AuthStack')}>
                        <Image
                          source={chat_grey}
                          style={{width: 25, height: 25}}
                        />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileTab} onPress={()=> navigation.navigate('AgentProfile')}>
                  <ImageBackground style={styles.profileImgTab} source={Model8}>
                    <View style={styles.agentOptions}>
                      <Text style={styles.agentName}>Faina ✨</Text>
                      <TouchableOpacity
                        style={styles.chatBtn}
                        onPress={() => navigation.navigate('AuthStack')}>
                        <Image
                          source={chat_grey}
                          style={{width: 25, height: 25}}
                        />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View style={{marginBottom:'10%'}}></View>
        </View>
      </SafeAreaView>
      <BottomBar active={'Home'} navigation={navigation} />
    </>
  );
}
const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  container: {
    paddingVertical: 20,
  },
  profileTabCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  profileTab: {
    height: 220,
    width: '43%',
  },
  profileImgTab: {
    height: 220,
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  agentName: {
    color: 'white',
    fontSize: 18,
    marginBottom: 4,
  },
  agentOptions: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
    paddingBottom: 8,
  },
  chatBtn: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
  },
});
