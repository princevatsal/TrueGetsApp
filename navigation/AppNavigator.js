import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Stack
import AuthStack from './AuthStack';
//AppStack
import AppStack from './AppStack';

import LoadingStack from './LoadingStack';

import AgentStack from './AgentStack';
const MainStack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="AppStack" headerMode="none">
                <MainStack.Screen name="AuthStack" component={AuthStack}></MainStack.Screen>
                <MainStack.Screen name="AppStack" component={AppStack}></MainStack.Screen>
                <MainStack.Screen name="LoadingStack" component={LoadingStack}></MainStack.Screen>
                <MainStack.Screen name="AgentStack" component={AgentStack}></MainStack.Screen>
            </MainStack.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigator;