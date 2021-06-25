import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../screens/Loading'
const Loading = createStackNavigator();
const LoadingStack = () => (
    <Loading.Navigator initialRouteName="LoadingScreen" headerMode="none">
        <Loading.Screen name="LoadingScreen" component={LoadingScreen} />
    </Loading.Navigator>
);
export default LoadingStack;