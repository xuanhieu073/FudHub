/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {images} from './src/assets';
import {NavigationBar} from './src/components';
import {Category, Login} from './src/views';
import Home from './src/views/home/Home';
import {Signup} from './src/views/signup/Signup';

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Category" component={Category} />
  </Stack.Navigator>
);

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
