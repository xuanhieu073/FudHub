import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';
import tw from '../../plugin/tailwind';

type RestaurantItemMdProps = {
  restaurantName: string;
  categoryTags: any[];
};

function RestaurantItemMd({
  restaurantName,
  categoryTags,
}: RestaurantItemMdProps) {
  return (
    <View style={tw.style(`rounded-2xl overflow-hidden`, styles.shadow)}>
      <View style={tw.style('mb-3', {width: 266, height: 136})}>
        <Image
          style={tw.style(`w-full h-full`, {resizeMode: 'cover'})}
          source={images.food.chickenHawaii}></Image>
      </View>
      <View style={tw`flex-row items-center ml-3 mb-1`}>
        <Text style={tw.style(`font-bold text-black`, {fontSize: 15})}>
          {restaurantName}
        </Text>
        <Image style={tw`ml-1`} source={images.icon.checkGray}></Image>
      </View>
      <View style={tw`flex-row items-center ml-3 mb-3`}>
        <Image source={images.icon.deliverMoto}></Image>
        <Text style={tw`text-xs ml-1`}>Free delivery</Text>
        <Image style={tw`ml-4`} source={images.icon.clock}></Image>
        <Text style={tw`text-xs ml-1`}>10-15 mins</Text>
      </View>
      <View style={tw`flex-row ml-3 mb-3`}>
        {categoryTags.map((CatTag, index) => (
          <Text
            key={index}
            style={tw.style(
              `px-2 py-1 mx-1 rounded bg-gray-100 text-gray-400 font-semibold uppercase`,
              {
                fontSize: 11,
              },
            )}>
            {CatTag}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#fff',
    shadowColor: '#A0A0A0',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.0,
    elevation: 24,
  },
});

export default RestaurantItemMd;
