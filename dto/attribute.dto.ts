import { TranslatedText } from "./translated-text";

export interface AttributeDto {
  id?: string;
  title: string;
  description: string;
  key: string;
  type: string;
  values: {
    key: string;
    title: string;
  }[];
  active: boolean;
  createDate?: string;
}
