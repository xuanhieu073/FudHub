import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import tw from '../../plugin/tailwind';

type CategoryItemMdProps = {
  isActive: boolean;
  CategoryName: string;
  imageCategory: any;
  onPress?: (e: any) => any;
};

function CategoryItemMd({
  isActive,
  CategoryName,
  imageCategory,
  onPress,
}: CategoryItemMdProps) {
  return (
    <Pressable
      onPress={() => onPress!(CategoryName)}
      style={tw.style(
        'rounded-full px-[5px] pt-[5px] pb-5 items-center overflow-hidden',
        {
          'bg-primary-400': isActive,
          'bg-white': !isActive,
        },
        {
          shadowColor: '#A0A0A0',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.5,
          shadowRadius: 16.0,
          elevation: 24,
        },
      )}>
      <View
        style={tw.style(`bg-white mb-2 overflow-hidden w-[56px] h-[56px]`, {
          'rounded-full': isActive,
        })}>
        <Image
          style={tw.style('h-full w-full', {resizeMode: 'cover'})}
          source={imageCategory}></Image>
      </View>
      <Text
        style={tw.style('text-white text-xs font-c-semibold', {
          'text-gray-500': !isActive,
        })}>
        {CategoryName || 'CatName'}
      </Text>
    </Pressable>
  );
}

export default CategoryItemMd;
