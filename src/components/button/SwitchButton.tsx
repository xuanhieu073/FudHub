import React, {useState} from 'react';
import {View} from 'react-native';
import tw from '../../plugin/tailwind';
import {LightButton, PrimaryButton} from './Button';

type SwitchButtonProps = {
  classes?: string;
  onToggle?: (e: boolean) => any;
};
export const SwitchButton = ({classes, onToggle}: SwitchButtonProps) => {
  const [value, setValue] = useState(false);
  const toggleTrueHandler = () => {
    setValue(true);
    onToggle && onToggle(true);
  };
  const toggleFalseHandler = () => {
    setValue(false);
    onToggle && onToggle(false);
  };
  return (
    <View
      style={tw.style(
        'rounded-full border border-gray-100 flex-row p-1',
        classes,
      )}>
      {!value ? (
        <PrimaryButton
          title="Upcoming"
          classes="flex-1 px-0 py-4"
          onPress={toggleFalseHandler}
        />
      ) : (
        <LightButton
          title="Upcoming"
          classes="flex-1 px-0 py-4"
          onPress={toggleFalseHandler}
        />
      )}
      {value ? (
        <PrimaryButton
          title="History"
          classes="flex-1 px-0 py-4"
          onPress={toggleTrueHandler}
        />
      ) : (
        <LightButton
          title="History"
          classes="flex-1 px-0 py-4"
          onPress={toggleTrueHandler}
        />
      )}
    </View>
  );
};
