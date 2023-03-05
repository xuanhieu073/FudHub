import React from 'react';
import {Image, ImageSourcePropType, Pressable, Text, View} from 'react-native';
import tw from '../../plugin/tailwind';

type ButtonProps = {
  title: string;
  classes?: string;
  onPress?: () => any;
};

export const PrimaryButton = ({title, classes, onPress}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={tw`${[
        'px-[75px] py-[25px] bg-primary-400 rounded-full items-center justify-center mx-auto',
        classes,
      ]
        .join(' ')
        .trim()}`}>
      <Text
        style={tw.style('text-sm font-c-semibold text-white', {
          letterSpacing: 1.08,
        })}>
        {title}
      </Text>
    </Pressable>
  );
};

type LightButtonProps = {
  title: string;
  classes?: string;
  iconSrc?: ImageSourcePropType;
};

export const LightButton = ({title, classes, iconSrc}: LightButtonProps) => {
  return (
    <Pressable
      style={tw.style(
        [
          'px-3 py-3 flex flex-row items-center justify-center gap-x-[10px] min-h-[57px]',
          'shadow-[#A0A0A0] shadow-opacity-50 shadow-offset-[0px]/[12px] shadow-offset-2/3 bg-white rounded-full mx-auto',
          classes,
        ]
          .join(' ')
          .trim(),
      )}>
      {iconSrc && <Image source={iconSrc}></Image>}
      <Text
        style={tw.style('text-sm font-c-semibold text-black', {
          letterSpacing: 1.08,
        })}>
        {title}
      </Text>
    </Pressable>
  );
};

type LinkButtonProps = {
  title: string;
  prefixText?: string;
  suffixText?: string;
};

export const LinkButton = ({
  title,
  prefixText,
  suffixText,
}: LinkButtonProps) => {
  return (
    <View style={tw`flex flex-row gap-x-1 justify-center`}>
      {prefixText && (
        <Text style={tw`text-[14px] text-[#5B5B5E] font-c-medium`}>
          {prefixText}
        </Text>
      )}
      <Pressable>
        <Text style={tw`text-[14px] text-primary-400 font-c-medium`}>
          {title}
        </Text>
      </Pressable>
      {suffixText && (
        <Text style={tw`text-[14px] text-[#5B5B5E] font-c-medium`}>
          {suffixText}
        </Text>
      )}
    </View>
  );
};
