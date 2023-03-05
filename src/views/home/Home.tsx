import React, {useState} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import tw from '../../plugin/tailwind';
import {CategoryItemMd} from '../../components';
import {RestaurantItemMd} from '../../components';
// import ViewMore from '../components/utilities/ViewMore';
import {images} from '../../assets';
// import HeaderMdText from '../typoraphy/HeaderMdText';
// import HeaderText from '../typoraphy/HeaderText';

function Home() {
  const [categories, setCategories] = useState([
    {name: 'Burger', isActive: true, image: images.icon.burger},
    {name: 'Donat', isActive: false, image: images.icon.donat},
    {name: 'Pizza', isActive: false, image: images.icon.pizza},
    {name: 'Mexican', isActive: false, image: images.icon.mexican},
    {name: 'Asian', isActive: false, image: images.icon.asian},
  ]);

  const [restaurants, setRestaurants] = useState([
    {name: `McDonald's`, categoryTags: ['burger', 'chicken', 'fast food']},
    {name: 'Starbuck', categoryTags: ['drink', 'fast food']},
  ]);

  return (
    <View>
      <View style={tw`px-6 py-8 flex-row justify-between`}>
        <View
          style={tw.style(
            'items-center justify-center bg-white rounded-xl h-10 w-10',
            {
              shadowColor: '#A0A0A0',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.5,
              shadowRadius: 16.0,
              elevation: 24,
            },
          )}>
          <Image source={images.icon.menu}></Image>
        </View>
        <View style={tw`items-center`}>
          <Text style={tw`text-sm leading-4 text-gray-500`}>Deliver to</Text>
          <Text style={tw`text-red-400 font-semibold`}>
            4102 Pretty View Lane
          </Text>
        </View>
        <View style={tw`w-10 h-10 rounded-xl overflow-hidden`}>
          <Image
            style={tw.style('w-full h-full', {resizeMode: 'cover'})}
            source={images.common.avatar}></Image>
        </View>
      </View>
      {/* <Text style={tw`text-3xl text-black font-bold mx-5 mb-5`}>
        What would you like to order
      </Text> */}
      {/* <HeaderText>What would you like to order</HeaderText> */}
      <View style={tw`mx-6 flex-row items-stretch mb-7`}>
        <View
          style={tw.style('rounded-xl flex-row items-center px-5', {
            backgroundColor: '#FCFCFD',
            borderColor: '#EFEFEF',
            borderWidth: 1,
            flexGrow: 1,
          })}>
          <Image source={images.icon.search}></Image>
          <TextInput
            style={tw`ml-2`}
            placeholder="Find for food or restaurant..."></TextInput>
        </View>
        <View
          style={tw.style(
            'items-center justify-center bg-white rounded-xl w-12 ml-4',
            {
              shadowColor: '#A0A0A0',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.5,
              shadowRadius: 16.0,
              elevation: 24,
            },
          )}>
          <Image source={images.icon.switch}></Image>
        </View>
      </View>
      <ScrollView style={tw`mx-4`} horizontal={true}>
        <View style={tw`mx-2 flex-row mb-7`}>
          {categories.map((category, index) => (
            <View key={index} style={tw.style({'ml-3': index !== 0})}>
              <CategoryItemMd
                CategoryName={category.name}
                isActive={category.isActive}
                imageCategory={category.image}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={tw`mt-1 mx-6`}>
        <View style={tw`flex-row justify-between mb-4`}>
          {/* <HeaderMdText>Featured Restaurants</HeaderMdText> */}
          {/* <ViewMore viewMoreText="View All"></ViewMore> */}
        </View>
      </View>
      <ScrollView style={tw`mx-4`} horizontal={true}>
        <View style={tw`flex-row mx-2 mb-6`}>
          {restaurants.map((restaurant, index) => (
            <View key={index} style={tw.style({'ml-3': index !== 0})}>
              <RestaurantItemMd
                restaurantName={restaurant.name}
                categoryTags={restaurant.categoryTags}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
