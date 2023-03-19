import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, images} from '../../assets';
import {
  CategoryItemMd,
  IconButton,
  NavigationButton,
  RestaurantItemMd,
} from '../../components';
import tw from '../../plugin/tailwind';

export const Landing = () => {
  const navigation: any = useNavigation();
  const [categories, setCategories] = useState([
    {name: 'Burger', isActive: true, image: icons.burger},
    {name: 'Donat', isActive: false, image: icons.donat},
    {name: 'Pizza', isActive: false, image: icons.pizza},
    {name: 'Mexican', isActive: false, image: icons.mexican},
    {name: 'Asian', isActive: false, image: icons.asian},
  ]);

  const [restaurants, setRestaurants] = useState([
    {name: `McDonald's`, categoryTags: ['burger', 'chicken', 'fast food']},
    {name: 'Starbuck', categoryTags: ['drink', 'fast food']},
  ]);

  return (
    <SafeAreaView style={tw`bg-white`}>
      <ScrollView>
        <View style={tw`px-6 py-8 flex-row justify-between`}>
          <NavigationButton icon={icons.menu} />
          <View style={tw`items-center`}>
            <Text style={tw`font-c-medium text-sm text-[#8C9099]`}>
              Deliver to
            </Text>
            <Text style={tw`font-c-medium text-sm text-primary-400`}>
              4102 Pretty View Lane
            </Text>
          </View>
          <View style={tw`w-10 h-10 rounded-xl overflow-hidden`}>
            <Image
              style={tw.style('w-full h-full', {resizeMode: 'cover'})}
              source={images.common.avatar}></Image>
          </View>
        </View>
        <Text style={tw`font-c-bold text-2xl text-[#323643] mx-5 mb-5`}>
          What would you like to order
        </Text>
        <View style={tw`mx-6 flex-row items-stretch mb-7`}>
          <View
            style={tw.style('rounded-xl flex-row items-center px-5', {
              backgroundColor: '#FCFCFD',
              borderColor: '#EFEFEF',
              borderWidth: 1,
              flexGrow: 1,
            })}>
            <Image source={icons.search}></Image>
            <TextInput
              numberOfLines={1}
              style={tw`ml-2 text-xs text-[#9AA0B4]`}
              placeholder="Find for food or restaurant..."></TextInput>
          </View>
          <IconButton icon={icons.switch} shadow={true} classes="w-12 ml-4" />
        </View>
        <ScrollView horizontal={true}>
          <View style={tw`px-6 flex-row mb-7`}>
            {categories.map((category, index) => (
              <View key={index} style={tw.style({'ml-3': index !== 0})}>
                <CategoryItemMd
                  CategoryName={category.name}
                  isActive={category.isActive}
                  imageCategory={category.image}
                  onPress={categoryName =>
                    setCategories(
                      categories.map(category =>
                        category.name === categoryName
                          ? {...category, isActive: true}
                          : {...category, isActive: false},
                      ),
                    )
                  }
                />
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={tw`mt-1 mx-6`}>
          <View style={tw`flex-row justify-between mb-4`}>
            <Text style={tw`font-c-semibold text-lg text-[#323643]`}>
              Featured Restaurants
            </Text>
            {/* <ViewMore viewMoreText="View All"></ViewMore> */}
            <Pressable
              style={tw`flex-row gap-x-1 items-center`}
              onPress={() => navigation.navigate('Category', {})}>
              <Text style={tw`font-c-normal text-sm text-primary-400`}>
                View All
              </Text>
              <Image source={icons.chevronRight}></Image>
            </Pressable>
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
      </ScrollView>
    </SafeAreaView>
  );
};
