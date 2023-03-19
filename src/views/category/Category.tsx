import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, images} from '../../assets';
import {FoodItemLg, IconButton, NavigationButton} from '../../components';
import tw from '../../plugin/tailwind';

export const Category = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={tw`px-6 pt-9`}>
        <NavigationButton
          icon={icons.chevronLeftBlack}
          classes={'mb-9'}
          onPress={() => navigation.goBack()}
        />
        <Text style={tw`font-c-bold text-[44px] leading-[50px] text-[#272D2F]`}>
          Fast
        </Text>
        <Text
          style={tw`font-c-bold text-[56px] leading-[80px] text-primary-400`}>
          Food
        </Text>
        <Text style={tw`font-c-medium text-lg text-[#9796A1] mb-12`}>
          80 type of pizza
        </Text>
        <View style={tw`flex-row justify-between mb-6 pr-6`}>
          <View style={tw`flex-row gap-x-2 items-center`}>
            <Text style={tw`font-c-medium text-sm text-[#111719]`}>
              Short by:
            </Text>
            <View style={tw`flex-row gap-x-1 items-center`}>
              <Text style={tw`font-c-medium text-primary-400`}>Popular</Text>
              <Image source={icons.chevronDownGray}></Image>
            </View>
          </View>
          <IconButton icon={icons.switch} classes="bg-transparent" />
        </View>
        <View style={tw`gap-y-5 mb-14`}>
          <FoodItemLg onPress={() => navigation.navigate('FoodDetails', {})} />
          <FoodItemLg />
          <FoodItemLg />
          <FoodItemLg />
          <FoodItemLg />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
