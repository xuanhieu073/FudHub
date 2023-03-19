import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../assets';
import tw from '../../plugin/tailwind';
import {QuantityInput} from '../quantityInput/QuantityInput';

type FoodItemMd = {
  quantity: number;
};
export const FoodItemMd = ({quantity: quantityPros}: FoodItemMd) => {
  const [quantity, setQuantity] = useState(quantityPros);
  return (
    <View style={tw`flex-row gap-x-5`}>
      <View
        style={tw.style('w-20 h-20 rounded-[20px] bg-white', {
          shadowColor: '#FE724C',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 1,
          shadowRadius: 16.0,
          elevation: 24,
        })}>
        <Image
          source={images.food.default}
          style={tw.style('w-20 h-20 rounded-[20px]')}
        />
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`font-c-semibold text-lg text-black`}>
          Red n hot pizza
        </Text>
        <Text style={tw`font-c-normal text-sm text-[#8C8A9D]`}>
          Spicy chicken, beef
        </Text>
        <Text style={tw`font-c-semibold text-base text-primary-400`}>
          $15.30
        </Text>
      </View>
      <View style={tw`absolute bottom-0 right-0`}>
        <QuantityInput
          quantity={quantity}
          increaseQuantity={() => null}
          decreaseQuantiry={() => null}
        />
      </View>
    </View>
  );
};
