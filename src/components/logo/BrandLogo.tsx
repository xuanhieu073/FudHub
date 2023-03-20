import React from 'react';
import {Image, View} from 'react-native';
import {icons} from '../../assets';
import tw from '../../plugin/tailwind';

export const BrandLogo = () => {
  return (
    <View
      style={tw`rounded-xl w-[65px] h-[65px] shadow-2xl bg-white items-center justify-center shadow-gray-400`}>
      <Image source={icons.starbuck}></Image>
    </View>
  );
};
