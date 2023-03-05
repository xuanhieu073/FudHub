import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {
  AuthorizeLayout,
  Input,
  LinkButton,
  PrimaryButton,
} from '../../components';
import tw from '../../plugin/tailwind';

export const Signup = () => {
  return (
    <AuthorizeLayout>
      <View style={tw`mt-6 mb-[54px] flex flex-col gap-y-[30px]`}>
        <Text style={tw`text-3xl font-c-semibold text-black`}>Sign Up</Text>
        <Input label="Full name" placeholder="Your full name" />
        <Input label="E-mail" placeholder="Your email or phone" />
        <Input label="Password" placeholder="Password" />
        <PrimaryButton title="SIGN UP" classes="w-[248px]" />
        <LinkButton prefixText="ALready have an account?" title="Login" />
      </View>
    </AuthorizeLayout>
  );
};
