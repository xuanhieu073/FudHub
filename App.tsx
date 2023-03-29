/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {Category, FoodDetails, Login} from './src/views';
import Home from './src/views/home/Home';

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Category" component={Category} />
    <Stack.Screen name="FoodDetails" component={FoodDetails} />
  </Stack.Navigator>
);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
