import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {CategoryItem, CategoryItemMemo} from '../../components';
import tw from '../../plugin/tailwind';
import {
  selectActiveCategory,
  selectCategories,
} from '../../store/modules/categories/categorySelector';

export const LandingCategories = () => {
  const categories = useSelector(selectCategories);
  const activeCategory = useSelector(selectActiveCategory);
  return (
    <ScrollView
      horizontal={true}
      decelerationRate={0}
      snapToInterval={56}
      snapToAlignment={'start'}>
      <View style={tw`mx-6 flex-row mb-7 gap-x-4`}>
        {categories.map((category, index) => (
          <View key={index}>
            <CategoryItemMemo
              category={category}
              isActive={category.name === activeCategory?.name}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
