import React from 'react';
import {Image, Text, View} from 'react-native';
import {icons} from '../../assets';
import tw from '../../plugin/tailwind';
import {LightButton, PrimaryButton} from '../button/Button';
import {BrandLogo} from '../logo/BrandLogo';

type OrderItemlgProps = {
  classes?: string;
};
export const OrderItemLg = ({classes}: OrderItemlgProps) => {
  return (
    <View
      style={tw.style(
        'rounded-[18px] bg-white shadow-2xl shadow-[#d3d1d8] p-[18px] gap-y-5',
        classes,
      )}>
      <View style={tw`flex-row`}>
        <BrandLogo />
        <View style={tw`mt-auto ml-[18px]`}>
          <Text style={tw`font-c-medium text-xs text-gray-500`}>3 Items</Text>
          <Text style={tw`font-c-semibold text-base text-black`}>Starbuck</Text>
        </View>
        <Text
          style={tw`mb-auto ml-auto font-c-medium text-base text-primary-400`}>
          #264100
        </Text>
      </View>
      <View style={tw`flex-row justify-between`}>
        <View>
          <Text style={tw`font-c-medium text-xs text-gray-500`}>
            Estimated Arrival
          </Text>
          <View style={tw`flex-row items-end gap-x-1`}>
            <Text style={tw`font-c-semibold text-[36px] text-dark-500`}>
              25
            </Text>
            <Text style={tw`font-c-medium text-sm text-dark-500 pb-3`}>
              min
            </Text>
          </View>
        </View>
        <View style={tw`items-end`}>
          <Text style={tw`font-c-medium text-xs text-gray-500 mb-1`}>Now</Text>
          <Text style={tw`font-c-semibold text-xs text-dark-500`}>
            Food on the way
          </Text>
        </View>
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
