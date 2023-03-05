import React from 'react';
import {Image, View} from 'react-native';
import {images} from '../../assets';
import tw from 'twrnc';

export const Header = () => {
  return (
    <View style={tw`flex flex-row justify-between`}>
      <Image source={images.illustration.headerLeft} />
      <Image source={images.illustration.headerRight} />
    </View>
  );
};
