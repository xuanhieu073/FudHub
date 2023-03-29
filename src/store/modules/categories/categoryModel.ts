import {ImageSourcePropType} from 'react-native';
export type Category = {
  name: string;
  isActive: boolean;
  image: ImageSourcePropType;
};

export type CategoryState = {
  categories: Category[];
  activeCategory: Category | null;
};
