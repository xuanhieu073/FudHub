import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {icons, images} from '../../assets';
import tw from '../../plugin/tailwind';

export const NavigationBar = ({navigation}: any) => {
  return (
    <Pressable style={tw`absolute top-20`} onPress={() => navigation.goBack()}>
      <Image style={{width: 50, height: 50}} source={icons.donat} />
    </Pressable>
  );
};
