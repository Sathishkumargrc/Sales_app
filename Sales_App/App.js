import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpalshScreen from './src/Screens/SpalshScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
import AuthNavigator from './src/Auth/AuthNavigator';
import RootNavigator from './src/Auth/RootNavigator';
// import ClientNavigator from './src/Auth/ClientNavigator';

const Stack = createNativeStackNavigator();

const App = () => {

    return(
        <Provider store={store}>
            <NavigationContainer>
            <Stack.Navigator screenOptions={{
                header : () => null
            }} initialRouteName = 'SplashScreen'>
            <Stack.Screen name='SplashScreen' component={SpalshScreen} />
            <Stack.Screen name='AuthNavigator' component={AuthNavigator} />
            <Stack.Screen name='RootNavigator' component={RootNavigator} />
            {/* <Stack.Screen name='ClientNavigator' component={ClientNavigator} /> */}
            </Stack.Navigator>
        </NavigationContainer>
         </Provider>
        
    )
}

export default App;