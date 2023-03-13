/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Login} from './src/views';
import Home from './src/views/home/Home';
import {Signup} from './src/views/signup/Signup';

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Home' component={Home}/>
  </Stack.Navigator>
)

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
export default App;
