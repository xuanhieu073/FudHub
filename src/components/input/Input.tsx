import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import tw from '../../plugin/tailwind';

type InputProps = {
  label: string;
  placeholder?: string;
};

export const Input = ({label, placeholder}: InputProps) => {
  const [innerPlaceholder, setInnerPlaceholder] = useState(placeholder || '');
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 200);

  useEffect(() => {
    value ? setInnerPlaceholder('') : setInnerPlaceholder(placeholder || '');
  }, [debouncedValue]);

  return (
    <View style={tw`flex flex-col gap-y-2`}>
      <Text style={tw`font-c-normal text-base text-[#9796A1]`}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={tw`px-5 py-6 ${
          innerPlaceholder ? 'font-c-normal' : 'font-c-medium'
        } text-lg border border-[#EEEEEE] text-dark-500 rounded-lg`}
        onChangeText={text => {
          setValue(text);
        }}
      />
    </View>
  );
};

function useDebounce(value: string, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}
