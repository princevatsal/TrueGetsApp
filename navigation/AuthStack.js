import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import UserSignup from '../screens/UserSignup'
import UserLogin from '../screens/UserLogin'
import AgentLogin from '../screens/AgentLogin'
import AgentSignup from '../screens/AgentSignup'          
const Auth = createStackNavigator();
const AuthStack = () => (
    <Auth.Navigator initialRouteName="Login" headerMode="none">
        <Auth.Screen name="UserSignup" component={UserSignup} />
        <Auth.Screen name="UserLogin" component={UserLogin} />
        <Auth.Screen name="AgentLogin" component={AgentLogin} />
        <Auth.Screen name="AgentSignup" component={AgentSignup} />
        <Auth.Screen name="Login" component={Login} />
    </Auth.Navigator>
);
export default AuthStack;