import { TranslatedText } from './translated-text';

export interface CategoriesNodeDto {
  id?: string;
  title: TranslatedText;
  description: TranslatedText;
  children: CategoriesNodeDto[];
  sort: number;
  active: boolean;
}

export interface CategoriesTreeDto {
  tree: CategoriesNodeDto;
}
