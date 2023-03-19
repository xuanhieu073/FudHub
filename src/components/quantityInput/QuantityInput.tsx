import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {icons} from '../../assets';
import tw from '../../plugin/tailwind';

type QuantityInputProps = {
  quantity: number;
  decreaseQuantiry: any;
  increaseQuantity: any;
};
export const QuantityInput = ({
  quantity,
  decreaseQuantiry,
  increaseQuantity,
}: QuantityInputProps) => {
  return (
    <View style={tw`flex-row items-center gap-x-2`}>
      <QuantityControlButton
        isDisable={quantity <= 1}
        activeIcon={icons.minusWhite}
        inactiveIcon={icons.minus}
        onPress={decreaseQuantiry}
      />
      <Text style={tw`font-semibold text-base`}>
        {String(quantity).padStart(2, '0')}
      </Text>
      <QuantityControlButton
        activeIcon={icons.plusWhite}
        inactiveIcon={icons.plus}
        onPress={increaseQuantity}
      />
    </View>
  );
};

type QuantityControlButton = {
  isDisable?: boolean;
  activeIcon: any;
  inactiveIcon: any;
  onPress?: () => any;
};

const QuantityControlButton = ({
  isDisable,
  activeIcon,
  inactiveIcon,
  onPress,
}: QuantityControlButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={tw.style(
        'rounded-full w-7 h-7 items-center justify-center border border-primary-400',
        {
          'bg-primary-400 shadow-2xl shadow-primary-400': !isDisable,
        },
      )}>
      <Image source={isDisable ? inactiveIcon : activeIcon} />
    </Pressable>
  );
};
