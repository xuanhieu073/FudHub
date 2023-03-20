import React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationButton} from '..';
import {icons, images} from '../../assets';
import tw from '../../plugin/tailwind';

type MainHeaderProps = {
  title: string;
  classes?: string;
  onBack?: () => any;
};
export const MainHeader = ({title, classes, onBack}: MainHeaderProps) => {
  return (
    <View style={tw.style('flex-row items-center mb-7', classes)}>
      <NavigationButton icon={icons.chevronLeftBlack} onPress={onBack} />
      <Text
        style={tw`flex-1 text-center font-c-semibold text-lg text-[#111719]`}>
        {title}
      </Text>
      <View style={tw`w-10 h-10 rounded-xl overflow-hidden`}>
        <Image
          style={tw.style('w-full h-full', {resizeMode: 'cover'})}
          source={images.common.avatar}></Image>
      </View>
    </View>
  );
};
