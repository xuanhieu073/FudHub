import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import tw from '../../plugin/tailwind';
import {Category} from '../../store/modules/categories/categoryModel';
import {selectCategory} from '../../store/modules/categories/categoriesSlice';
import {selectActiveCategory} from '../../store/modules/categories/categorySelector';

type CategoryItemMdProps = {
  category: Category;
  isActive: boolean;
};

function CategoryItem({category, isActive}: CategoryItemMdProps) {
  const dispatch = useDispatch();
  const selectCategoryHandler = () => {
    dispatch(selectCategory(category));
  };

  return (
    <Pressable
      onPress={selectCategoryHandler}
      style={tw.style(
        'rounded-full px-[5px] pt-[5px] pb-5 items-center overflow-hidden',
        {
          'bg-primary-400': isActive,
          'bg-white': !isActive,
        },
        {
          shadowColor: '#A0A0A0',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.5,
          shadowRadius: 16.0,
          elevation: 24,
        },
      )}>
      <View
        style={tw.style(`bg-white mb-2 overflow-hidden w-[56px] h-[56px]`, {
          'rounded-full': isActive,
        })}>
        <Image
          style={tw.style('h-full w-full', {resizeMode: 'cover'})}
          source={category.image}></Image>
      </View>
      <Text
        style={tw.style('text-white text-xs font-c-semibold', {
          'text-gray-500': !isActive,
        })}>
        {category.name || 'CatName'}
      </Text>
    </Pressable>
  );
}

export default CategoryItem;
export const CategoryItemMemo = React.memo(CategoryItem);
