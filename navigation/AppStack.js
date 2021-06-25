import React, { useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Chat from '../screens/Chat'
import Profile from '../screens/Profile'
import Terms from '../screens/Terms'
import Privacy from '../screens/Privacy'
import AgentProfile from '../screens/AgentProfile'
import Subscriptions from '../screens/Subscriptions'
import About from '../screens/About'
import Contact from '../screens/Contact'
const App = createStackNavigator();
const AppStack = () => {
    return (
        <>
            <App.Navigator initialRouteName="Home" headerMode="none">
                <App.Screen name="Home" component={Home} />
                <App.Screen name="Profile" component={Profile} />
                <App.Screen name="Terms" component={Terms} />
                <App.Screen name="Privacy" component={Privacy} />
                <App.Screen name="AgentProfile" component={AgentProfile} />
                <App.Screen name='Subscriptions' component={Subscriptions} />
                <App.Screen name='About' component={About} />
                <App.Screen name='Contact' component={Contact} />
                <App.Screen name='Chat' component={Chat} />
            </App.Navigator>
        </>
    )
};

export default AppStack;