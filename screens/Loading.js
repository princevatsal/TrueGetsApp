import React from 'react'
import { View,Image, ActivityIndicator } from 'react-native'
import logo from '../images/logo.png'
export default function Loading() {
    return (
        <View style={{height:'100%'}}>
            <View style={{justifyContent:'center',flex:1}}>
                <Image source={logo} style={{
                    width:'65%',
                    height:'7%',
                    alignSelf:'center'
                }} />
                <ActivityIndicator style={{marginTop:'10%'}} color="#ff389c" size={32} />
            </View>
        </View>
    )
}
