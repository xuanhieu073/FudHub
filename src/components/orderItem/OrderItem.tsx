import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../plugin/tailwind';
import {LightButton, PrimaryButton} from '../button/Button';
import {BrandLogo} from '../logo/BrandLogo';

export const OrderItem = () => {
  return (
    <View
      style={tw.style(
        'rounded-[18px] bg-white shadow-2xl shadow-[#d3d1d8] p-[18px] gap-y-5',
      )}>
      <View style={tw`flex-row items-center mb-6`}>
        <BrandLogo />
        <View style={tw`ml-4`}>
          <View style={tw`flex-row items-center gap-2`}>
            <Text style={tw`font-c-normal text-gray-500 text-xs`}>
              20 Jun, 10:30
            </Text>
            <View style={tw`w-1 h-1 bg-gray-200 rounded-full`}></View>
            <Text style={tw`font-c-normal text-gray-500 text-xs`}>3 Items</Text>
          </View>
          <Text style={tw`font-c-semibold text-base text-black`}>
            Jimmy John’s
          </Text>
          <View style={tw`flex flex-row gap-x-1 items-center`}>
            <View style={tw`w-2 h-2 rounded-full bg-primary-300`}></View>
            <Text style={tw`font-normal text-xs text-primary-300`}>
              Order Delivered
            </Text>
          </View>
        </View>
        <Text
          style={tw`font-c-normal text-base text-primary-400 ml-auto mb-auto`}>
          $17.10
        </Text>
      </View>
      <View style={tw`flex-row gap-x-4`}>
        <LightButton title="Cancel" shadow={true} classes="flex-1 px-1 py-4" />
        <PrimaryButton
          title="Track Order"
          shadow={true}
          classes="flex-1 px-1 py-4"
        />
      </View>
    </View>
  );
};
