import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {
  MainHeader,
  MainLayout,
  OrderItem,
  OrderItemLg,
  SwitchButton,
} from '../../components';
import tw from '../../plugin/tailwind';
import {History} from './History';
import {Upcoming} from './Upcoming';

export const MyOrders = () => {
  const navigation = useNavigation();
  const [tab, setTab] = useState<'Upcoming' | 'History'>('Upcoming');
  return (
    <MainLayout>
      <View style={tw`mx-6 my-8`}>
        <MainHeader
          title="My Orders"
          classes="mb-8"
          onBack={() => navigation.goBack()}
        />
        <SwitchButton
          classes="mb-8"
          onToggle={e => (e ? setTab('History') : setTab('Upcoming'))}
        />
        <Upcoming visible={tab === 'Upcoming'} />
        <History visible={tab === 'History'} />
      </View>
    </MainLayout>
  );
};
