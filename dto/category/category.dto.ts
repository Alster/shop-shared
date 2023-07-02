export interface CategoryDto {
  publicId: string;
  id: string;
  title: string;
  description: string;
  children: string[];
  parents: string[];
  sort: number;
}
