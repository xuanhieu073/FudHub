import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {Cart, Favorites, Landing, MyOders, Notifications} from '..';
import {images} from '../../assets';

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
    <Tab.Screen
      name="Landing"
      component={Landing}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={focused ? images.icon.browsing : images.icon.browsingGray}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarIcon: ({focused}) => (
          <Image source={focused ? images.icon.cart : images.icon.cartGray} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarIcon: ({focused}) => (
          <Image source={focused ? images.icon.heart : images.icon.heartGray} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={focused ? images.icon.orders : images.icon.ordersGray}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

function Home() {
  return <TabNavigator />;
}

export default Home;
