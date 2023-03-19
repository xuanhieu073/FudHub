import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {icons, images} from '../../assets';
import tw from '../../plugin/tailwind';

type FoodItemLgProps = {
  onPress?: (e: any) => any;
};
export const FoodItemLg = ({onPress}: FoodItemLgProps) => {
  return (
    <Pressable
      style={tw`rounded-2xl bg-white shadow-2xl shadow-[#d3d1d8]`}
      onPress={onPress}>
      <View>
        <Image
          source={images.food.chickenHawaii}
          style={tw`rounded-2xl w-full h-[165px]`}></Image>
        <View
          style={tw`absolute top-3 left-3 bg-white rounded-full px-2 py-1 flex-row gap-x-0`}>
          <Text style={tw`font-c-semibold text-lg text-primary-400`}>$</Text>
          <Text style={tw`font-c-semibold text-lg text-black`}>10.35</Text>
        </View>
        <View
          style={tw`absolute top-3 right-3 bg-primary-400 p-2 rounded-full`}>
          <Image source={icons.heartWhite}></Image>
        </View>
        <View
          style={tw`absolute -bottom-4 left-3 bg-white p-2 flex-row gap-x-1 items-center rounded-full shadow-2xl shadow-[#d3d1d8]`}>
          <Text style={tw`font-c-semibold text-xs`}>4.5</Text>
          <Image source={icons.star}></Image>
          <Text style={tw`font-c-normal text-[8px]`}>(25+)</Text>
        </View>
      </View>
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
