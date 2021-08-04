import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AgentChat from '../screens/AgentChat'      
import AgentModuleProfile from '../screens/AgentModuleProfile'      
import UserProfile from '../screens/UserProfile'      
const Agent = createStackNavigator();
const AgentStack = () => (
    <Agent.Navigator initialRouteName="AgentChat" headerMode="none">
        <Agent.Screen name="AgentChat" component={AgentChat} />
        <Agent.Screen name="AgentModuleProfile" component={AgentModuleProfile} />
        <Agent.Screen name="UserProfile" component={UserProfile} />
    </Agent.Navigator>
);
export default AgentStack;