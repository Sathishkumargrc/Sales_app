import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../Screens/LoginScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

    return(
        <Stack.Navigator 
        screenOptions={{
            header : () => null
        }} initialRouteName = 'WelcomeScreen'
        >
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator;