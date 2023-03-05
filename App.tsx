/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Login} from './src/views';
import Home from './src/views/home/Home';
import {Signup} from './src/views/signup/Signup';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
}
export default App;
