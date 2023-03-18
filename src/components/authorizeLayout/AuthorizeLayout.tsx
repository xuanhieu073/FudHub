import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Header, LightButton} from '..';
import {images} from '../../assets';
import tw from '../../plugin/tailwind';

type AuthorizeLayoutProps = {
  children: React.ReactNode;
};

export const AuthorizeLayout = ({children}: AuthorizeLayoutProps) => {
  return (
    <ScrollView style={tw`bg-white`}>
      <Header />
      <View style={tw`mx-6`}>{children}</View>
      <View style={tw`flex gap-y-4 pb-7 px-6`}>
        <View style={tw`flex flex-row items-center gap-x-5`}>
          <View style={tw`h-[1px] flex-1 bg-[#B3B3B3]`}></View>
          <Text style={tw`text-[14px] text-[#5B5B5E] font-c-medium`}>
            Sign up with
          </Text>
          <View style={tw`h-[1px] flex-1 bg-[#B3B3B3]`}></View>
        </View>
        <View style={tw`flex flex-row justify-between`}>
          <LightButton title="FACEBOOK" iconSrc={images.icon.facebook} />
          <LightButton title="GOOGLE" iconSrc={images.icon.google} />
        </View>
      </View>
    </ScrollView>
  );
};
