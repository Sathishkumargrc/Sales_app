import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ClientScreen from '../Screens/ClientScreen';
import HomeScreen from '../Screens/HomeScreen';
import VendorScreen from '../Screens/VendorScreen';
import ClientNavigator from './ClientNavigator';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {


    return(
        <Stack.Navigator
        screenOptions={{
            header : () => null
        }} initialRouteName = 'HomeScreen'
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='ClientScreen' component={ClientScreen} />
            <Stack.Screen name='VendorScreen' component={VendorScreen} />
            <Stack.Screen name='ClientNavigator' component={ClientNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigator;