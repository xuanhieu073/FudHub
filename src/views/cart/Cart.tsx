import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {icons} from '../../assets';
import {
  FoodItemMd,
  MainLayout,
  NavigationButton,
  PrimaryButton,
} from '../../components';
import tw from '../../plugin/tailwind';

export const Cart = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <View style={tw`px-6 pt-9`}>
        <View style={tw`flex-row items-center mb-7`}>
          <NavigationButton
            icon={icons.chevronLeftBlack}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={tw`flex-1 text-center pr-10 font-c-semibold text-lg text-[#111719]`}>
            Cart
          </Text>
        </View>
        <View style={tw`gap-y-6 mb-8`}>
          <FoodItemMd quantity={1} />
          <FoodItemMd quantity={1} />
        </View>
        <View style={tw`p-2 border border-gray-100 rounded-full flex-row mb-7`}>
          <TextInput
            placeholder="Promo Code"
            style={tw`flex-1 text-base font-c-normal ml-4`}
          />
          <PrimaryButton title="Apply" classes="px-6 py-4" />
        </View>
        <BillList />
        <View
          style={tw`px-20 py-5 mx-auto bg-primary-400 rounded-full shadow-2xl shadow-primary-400 mb-10`}>
          <Text style={tw`font-c-medium text-base text-white`}>Checkout</Text>
        </View>
      </View>
    </MainLayout>
  );
};

const BillList = () => {
  return (
    <View style={tw`bg-gray-100 gap-y-[1px] mb-20`}>
      <BillItem FeeName="Subtotal" FeePrice={27.3} />
      <BillItem FeeName="Tax and Fees" FeePrice={5.3} />
      <BillItem FeeName="Delivery" FeePrice={1} />
      <BillItem FeeName="Total" FeeSubame="(2 items)" FeePrice={33.6} />
    </View>
  );
};
type BillItemProps = {
  FeeName: string;
  FeePrice: number;
  FeeSubame?: string;
};
const BillItem = ({FeeName, FeePrice, FeeSubame}: BillItemProps) => {
  return (
    <View style={tw`flex-row justify-between bg-white py-3`}>
      <View style={tw`flex-row gap-x-1 items-center`}>
        <Text style={tw`font-c-medium text-base text-black`}>{FeeName}</Text>
        {FeeSubame && (
          <Text style={tw`font-c-normal text-[14px] text-gray-400`}>
            {FeeSubame}
          </Text>
        )}
      </View>
      <View style={tw`flex-row gap-x-1 items-center`}>
        <Text style={tw`font-c-medium text-lg text-black`}>
          ${FeePrice.toFixed(2)}
        </Text>
        <Text style={tw`font-c-normal text-gray-400`}>USD</Text>
      </View>
    </View>
  );
};
