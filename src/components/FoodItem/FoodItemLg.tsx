import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {images} from '../../assets';
import tw from '../../plugin/tailwind';

type FoodItemLgProps = {
  onPress?: (e: any) => any;
};
export const FoodItemLg = ({onPress}: FoodItemLgProps) => {
  return (
    <Pressable
      style={tw`rounded-2xl bg-white shadow-2xl shadow-[#d3d1d8]`}
      onPress={onPress}>
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
    </Pressable>
  );
};
