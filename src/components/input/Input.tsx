import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {TextInputProps} from 'react-native/types';
import tw from '../../plugin/tailwind';

enum TextContentType {
  'none',
  'URL',
  'addressCity',
  'addressCityAndState',
  'addressState',
  'countryName',
  'creditCardNumber',
  'emailAddress',
  'familyName',
  'fullStreetAddress',
  'givenName',
  'jobTitle',
  'location',
  'middleName',
  'name',
  'namePrefix',
  'nameSuffix',
  'nickname',
  'organizationName',
  'postalCode',
  'streetAddressLine1',
  'streetAddressLine2',
  'sublocality',
  'telephoneNumber',
  'username',
  'password',
}

type InputProps = TextInputProps & {
  label: string;
  placeholder?: string;
  isError?: boolean;
  onChangeText?: (value: string) => any;
};

export const Input = ({
  label,
  placeholder,
  isError,
  onChangeText,
  ...props
}: InputProps) => {
  const [innerPlaceholder, setInnerPlaceholder] = useState(placeholder || '');
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 100);

  useEffect(() => {
    value ? setInnerPlaceholder('') : setInnerPlaceholder(placeholder || '');
  }, [debouncedValue]);

  return (
    <View style={tw`flex flex-col gap-y-2`}>
      <Text style={tw`font-c-normal text-base text-[#9796A1]`}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        {...props}
        style={tw`px-5 py-6 ${
          innerPlaceholder ? 'font-c-normal' : 'font-c-medium'
        } text-lg border ${
          isError ? 'border-red-500' : 'border-[#EEEEEE]'
        } text-dark-500 rounded-lg`}
        onChangeText={text => {
          setValue(text);
          onChangeText && onChangeText(text);
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
