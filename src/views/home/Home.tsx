import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {Cart, Favorites, Landing, MyOrders, Notifications} from '..';
import {icons, images} from '../../assets';

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
          <Image source={focused ? icons.browsing : icons.browsingGray} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarIcon: ({focused}) => (
          <Image source={focused ? icons.cart : icons.cartGray} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarIcon: ({focused}) => (
          <Image source={focused ? icons.heart : icons.heartGray} />
        ),
      }}
    />
    <Tab.Screen
      name="MyOrder"
      component={MyOrders}
      options={{
        tabBarIcon: ({focused}) => (
          <Image source={focused ? icons.orders : icons.ordersGray} />
        ),
      }}
    />
  </Tab.Navigator>
);

function Home() {
  return <TabNavigator />;
}

export default Home;
