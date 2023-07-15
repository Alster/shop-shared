import { TranslatedText } from "../translatedText";

export interface CategoriesNodeAdminDto {
	id: string;
	publicId: string;
	title: TranslatedText;
	description: TranslatedText;
	children: CategoriesNodeAdminDto[];
	sort: number;
	active: boolean;
}

export interface CategoriesTreeAdminDto {
	root: CategoriesNodeAdminDto[];
}

export interface CategoriesNodeDto {
	id: string;
	publicId: string;
	title: string;
	description: string;
	children: CategoriesNodeDto[];
	sort: number;
	active: boolean;
}

export interface CategoriesTreeDto {
	root: CategoriesNodeDto[];
}
