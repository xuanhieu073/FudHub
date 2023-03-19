import {memo, useCallback, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {icons, images} from '../../assets';
import {LinkButton, RadioButton} from '../../components';
import tw from '../../plugin/tailwind';

export const FoodDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [addonList, setAddonList] = useState<AddOnItem[]>([
    {
      id: '1',
      isSelected: false,
      name: 'Pepper Julienned',
      image: images.food.pepperJuliened,
      price: 2.3,
    },
    {
      id: '2',
      isSelected: false,
      name: 'Baby Spinach',
      image: images.food.babySpinach,
      price: 4.7,
    },
    {
      id: '3',
      isSelected: false,
      name: 'Masroom',
      image: images.food.masroom,
      price: 2.5,
    },
  ]);

  const decreaseQuantiry = () => {
    setQuantity(quantity > 2 ? quantity - 1 : 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const ToggleAddOnItemHandler = (addonItem: AddOnItem) => {
    setAddonList(
      addonList.map(addon => (addon.id === addonItem.id ? addonItem : addon)),
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={tw`px-6 pt-7 pb-8`}>
        <Image
          source={images.food.default}
          style={tw`w-full h-[206px] rounded-[10px] mb-5`}
        />
        <Text style={tw`font-c-semibold text-[28px] leading-[32px] mb-3`}>
          Ground Beef Tacos
        </Text>
        <View style={tw`flex flex-row gap-x-2 mb-4`}>
          <Text>⭐️</Text>
          <View style={tw`flex flex-row gap-x-1`}>
            <Text style={tw`font-c-semibold text-sm`}>4.5</Text>
            <Text style={tw`font-c-normal text-sm text-[#9796A1]`}>(30+)</Text>
          </View>
          <LinkButton title="See Review" classes="underline"></LinkButton>
        </View>
        <View style={tw`flex-row justify-between items-center mb-5`}>
          <View style={tw`flex-row items-end`}>
            <Text
              style={tw`font-c-medium text-base text-primary-400 ios:pb-[6px] android:pb-[10px]`}>
              $
            </Text>
            <Text style={tw`font-c-semibold text-2xl text-primary-400`}>
              9.50
            </Text>
          </View>
          <View style={tw`flex-row items-center gap-x-2`}>
            <QuantityControlButton
              isDisable={quantity <= 1}
              activeIcon={icons.minusWhite}
              inactiveIcon={icons.minus}
              onPress={decreaseQuantiry}
            />
            <Text style={tw`font-semibold text-base`}>
              {String(quantity).padStart(2, '0')}
            </Text>
            <QuantityControlButton
              activeIcon={icons.plusWhite}
              inactiveIcon={icons.plus}
              onPress={increaseQuantity}
            />
          </View>
        </View>
        <Text style={tw`font-c-normal text-sm text-[#858992] mb-5`}>
          Brown the beef better. Lean ground beef – I like to use 85% lean
          angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion
          powder.
        </Text>
        <Text style={tw`font-c-semibold text-[#323643] text-lg mb-2`}>
          Choice of Add On
        </Text>
        <View style={tw`gap-y-2 mb-20`}>
          {addonList.map(addon => (
            <AddOnItem
              {...addon}
              key={addon.name}
              onPress={e => ToggleAddOnItemHandler(e)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

type QuantityControlButton = {
  isDisable?: boolean;
  activeIcon: any;
  inactiveIcon: any;
  onPress?: () => any;
};

const QuantityControlButton = ({
  isDisable,
  activeIcon,
  inactiveIcon,
  onPress,
}: QuantityControlButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={tw.style(
        'rounded-full w-7 h-7 items-center justify-center border border-primary-400',
        {
          'bg-primary-400': !isDisable,
        },
      )}>
      <Image source={isDisable ? inactiveIcon : activeIcon} />
    </Pressable>
  );
};

type AddOnItem = {
  id: string;
  isSelected: boolean;
  name: string;
  image: any;
  price: number;
};
type AddOnItemProps = AddOnItem & {
  onPress: (item: AddOnItem) => any;
};
const AddOnItem = (props: AddOnItemProps) => {
  const {id, isSelected, name, image, price, onPress} = props;
  const {onPress: _, ...addonItem} = props;
  return (
    <View style={tw`flex-row justify-between`}>
      <View style={tw`flex-row gap-x-2 items-center`}>
        <Image source={image} />
        <Text style={tw`font-c-normal text-sm`}>{name}</Text>
      </View>
      <Pressable
        style={tw`flex-row gap-x-3`}
        onPress={() => onPress({...addonItem, isSelected: !isSelected})}>
        <Text style={tw`font-c-normal text-sm`}>{`+$${price.toFixed(2)}`}</Text>
        <RadioButton isSelected={isSelected} />
      </Pressable>
    </View>
  );
};
