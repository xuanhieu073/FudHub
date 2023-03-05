import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {images} from '../../assets';
import {AuthorizeLayout, Header, Input, LightButton} from '../../components';
import {PrimaryButton} from '../../components';
import {LinkButton} from '../../components';
import tw from '../../plugin/tailwind';

export const Login = () => {
  return (
    <AuthorizeLayout>
      <View style={tw`mt-24 mb-[54px] flex flex-col gap-y-6`}>
        <Text style={tw`text-3xl font-c-semibold text-black`}>Login</Text>
        <Input label="E-mail" placeholder="Your email or phone" />
        <Input label="Password" placeholder="Password" />
        <LinkButton title="Forgot password?" />
        <PrimaryButton title="SIGN UP" classes="w-[248px]" />
        <LinkButton prefixText="Dont't have an account?" title="Sign Up" />
      </View>
    </AuthorizeLayout>
  );
};
