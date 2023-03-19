import React from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../assets';
import tw from '../../plugin/tailwind';

export const DishItemLg = () => {
  return (
    <View style={tw`rounded-2xl bg-white`}>
      <Image
        source={images.food.chickenHawaii}
        style={tw`rounded-2xl w-full h-[165px]`}></Image>
      <View style={tw`px-3 py-6`}>
        <Text style={tw`font-c-semibold text-lg text-black mb-2`}>
          Chicken Hawaiian
        </Text>
        <Text style={tw`font-c-medium text-sm text-[#5B5B5E]`}>
          Chicken, Cheese and pineapple
        </Text>
      </View>
    </View>
  );
};
