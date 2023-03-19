import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import tw from '../../plugin/tailwind';

type MainlayoutProps = {
  children: React.ReactNode;
};
export const MainLayout = ({children}: MainlayoutProps) => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};
