import React from 'react';
import {Text, View} from 'react-native';
import {OrderItem, OrderItemLg} from '../../components';
import tw from '../../plugin/tailwind';

type UpcomingProps = {
  visible: boolean;
};
export const Upcoming = ({visible}: UpcomingProps) => {
  return (
    <View style={tw.style({hidden: !visible})}>
      <UpcomingContentMemo />
    </View>
  );
};

const UpcomingContent = () => {
  return (
    <>
      <OrderItemLg classes="mb-8" />
      <Text style={tw`font-c-semibold text-lg text-dark-500 mb-5`}>
        Lasted Orders
      </Text>
      <View style={tw`gap-y-5`}>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </View>
    </>
  );
};

export const UpcomingContentMemo = React.memo(UpcomingContent);
