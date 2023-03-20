import React from 'react';
import {View} from 'react-native';
import {OrderItem} from '../../components';
import tw from '../../plugin/tailwind';

type History = {
  visible: boolean;
};
export const History = ({visible}: History) => {
  return (
    <View style={tw.style({hidden: !visible})}>
      <HistoryContentMemo />
    </View>
  );
};

const HistoryContent = () => {
  return (
    <View style={tw`gap-y-5`}>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </View>
  );
};

const HistoryContentMemo = React.memo(HistoryContent);
