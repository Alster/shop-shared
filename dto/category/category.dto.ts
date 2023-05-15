export interface CategoryDto {
  id: string;
  title: string;
  description: string;
  children: string[];
  parents: string[];
  sort: number;
}
