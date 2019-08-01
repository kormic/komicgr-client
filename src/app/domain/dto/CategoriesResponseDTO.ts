import { Category } from '../model/Category';

export interface CategoriesResponseDTO {
    success: boolean;
    categories: Category[];
}