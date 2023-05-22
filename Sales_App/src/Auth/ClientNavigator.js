import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DeveloperDetails from '../Screens/DeveloperDetails';
import EditDeveloperDetails from '../Screens/EditDeveloperDetails';

const Stack = createNativeStackNavigator();

const ClientNavigator = () => {

    return(
        <Stack.Navigator screenOptions={{
            header : () => null
        }} initialRouteName = 'DeveloperDetails'>
            <Stack.Screen name='DeveloperDetails' component={DeveloperDetails} />
            <Stack.Screen name='EditDeveloperDetails' component={EditDeveloperDetails} />
        </Stack.Navigator>
    )
}

export default ClientNavigator;