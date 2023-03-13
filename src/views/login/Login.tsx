import {Formik} from 'formik';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {
  AuthorizeLayout,
  Input,
  LinkButton,
  PrimaryButton,
} from '../../components';
import tw from '../../plugin/tailwind';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('email'),
  password: Yup.string().required().min(4).label('Password'),
});

export const Login = ({navigation}: any) => {
  return (
    <AuthorizeLayout>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          console.log(values);
          navigation.navigate("Home");
        }}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors}) => (
          <>
            <View style={tw`mt-24 mb-[54px] flex flex-col gap-y-6`}>
              <Text style={tw`text-3xl font-c-semibold text-black`}>Login</Text>
              <View>
                <Input
                  label="E-mail"
                  placeholder="Your email or phone"
                  onChangeText={handleChange('email')}
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  isError={!!errors.email}
                />
                {errors.email && (
                  <Text style={tw`font-c-normal text-red-500`}>
                    {errors.email}
                  </Text>
                )}
              </View>
              <View>
                <Input
                  label="Password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  textContentType="password"
                  secureTextEntry
                  isError={!!errors.password}
                />
                {errors.password && (
                  <Text style={tw`font-c-normal text-red-500`}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <LinkButton title="Forgot password?" />
              <PrimaryButton
                title="SIGN UP"
                classes="w-[248px]"
                onPress={handleSubmit}
              />
              <LinkButton
                prefixText="Dont't have an account?"
                title="Sign Up"
              />
            </View>
          </>
        )}
      </Formik>
    </AuthorizeLayout>
  );
};
